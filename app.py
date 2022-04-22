# Load libraries
from flask import Flask, jsonify
import joblib
from flask_bootstrap import Bootstrap
from flask import render_template, redirect, url_for, request, send_from_directory, flash
import pandas as pd
import os
import requests
import json
import sklearn


#Set up Flask
TEMPLATE_DIR = os.path.abspath('templates')
STATIC_DIR = os.path.abspath('static')
# instantiate flask 
app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR)
app.secret_key="amazon_seller_model"
app.config['SESSION_COOKIE_SECURE'] = False
Bootstrap(app)
knn_model = joblib.load("static/assets/model/KNN_model.pk1")
logclf_model = joblib.load("static/assets/model/logclf.pk1")
dt_model = joblib.load("static/assets/model/DT_model.pk1")
rf_model = joblib.load("static/assets/model/RF_model.pk1")
nb_model = joblib.load("static/assets/model/NB_model.pk1")
knn_scaler = joblib.load("static/assets/model/knn_scaler.pkl")
logclf_scaler = joblib.load("static/assets/model/logclf_scaler.pkl")
print ('Model loaded')


@app.route('/')
def home():
    return render_template('index.html', title='homepage')

@app.route('/dashboard')
def dashboard():
    return render_template('db_index.html', title='Dashboard')

@app.route('/imbalance')
def imbalance():
    return render_template('imbalance.html', title='imbalancedataset')

@app.route('/SMOTE')
def SMOTE():
    return render_template('SMOTE.html', title='SMOTEdataset')

@app.route('/NearMiss')
def NearMiss():
    return render_template('NearMiss.html', title='NearMissdataset')

@app.route('/Cluster')
def Cluster():
    return render_template('Cluster.html', title='Cluster')

@app.route('/charts')
def charts():
    return render_template('charts.html', title='charts')

@app.route('/tables')
def tables():
    return render_template('tables.html', title='tables')

@app.route('/knnmodel',  methods=['GET', 'POST'])
def knnmodel():
    result = 0
    if request.method == 'POST':
        quantity=int(request.form['quantity'])
        totalcost=float(request.form['totalcost'])
        shippingfee=float(request.form['shippingfee'])
        cod=int(request.form['cod'])
        month=int(request.form['month'])
        date=int(request.form['date'])
        feature_columns=[quantity,totalcost, shippingfee, cod, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        
        feature_columns[month]=1
        feature_columns[date]=1
        
        x_feature=[feature_columns]
        Kscaler_data=knn_scaler.transform(x_feature)
        print(Kscaler_data)
        
        
        model_prediction = logclf_model.predict(Kscaler_data)
        if model_prediction == 0:
            result='Delivered to buyer'
        else:
            result='Return to seller'
        
    
    return render_template('knn_model.html', title='knnmodel', prediction=result, show_modal=True)


@app.route('/lgmodel',  methods=['GET', 'POST'])
def lgmodel():
    result = 0
    if request.method == 'POST':
        quantity=int(request.form['quantity'])
        totalcost=float(request.form['totalcost'])
        shippingfee=float(request.form['shippingfee'])
        cod=int(request.form['cod'])
        month=int(request.form['month'])
        date=int(request.form['date'])
        feature_columns=[quantity,totalcost, shippingfee, cod, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        
        feature_columns[month]=1
        feature_columns[date]=1
        
        x_feature=[feature_columns]
        lgscaler_data=logclf_scaler.transform(x_feature)
        print(lgscaler_data)
        
        
        model_prediction = knn_model.predict(lgscaler_data)
        if model_prediction == 0:
            result='Delivered to buyer'
        else:
            result='Return to seller'
        
    
    return render_template('lgr.html', title='lgmodel', prediction=result, show_modal=True)


@app.route('/dtmodel',  methods=['GET', 'POST'])
def dtmodel():
    result = 0
    if request.method == 'POST':
        quantity=int(request.form['quantity'])
        totalcost=float(request.form['totalcost'])
        shippingfee=float(request.form['shippingfee'])
        cod=int(request.form['cod'])
        month=int(request.form['month'])
        date=int(request.form['date'])
        feature_columns=[quantity,totalcost, shippingfee, cod, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        
        feature_columns[month]=1
        feature_columns[date]=1
        
        x_feature=[feature_columns]
        print(x_feature)
        
        
        model_prediction = dt_model.predict(x_feature)
        if model_prediction == 0:
            result='Delivered to buyer'
        else:
            result='Return to seller'
        
    
    return render_template('DT_model.html', title='dtmodel', prediction=result, show_modal=True)

@app.route('/nbmodel',  methods=['GET', 'POST'])
def nbmodel():
    result = 0
    if request.method == 'POST':
        quantity=int(request.form['quantity'])
        totalcost=float(request.form['totalcost'])
        shippingfee=float(request.form['shippingfee'])
        cod=int(request.form['cod'])
        month=int(request.form['month'])
        date=int(request.form['date'])
        feature_columns=[quantity,totalcost, shippingfee, cod, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        
        feature_columns[month]=1
        feature_columns[date]=1
        
        x_feature=[feature_columns]
        print(x_feature)
        
        
        model_prediction = nb_model.predict(x_feature)
        if model_prediction == 0:
            result='Delivered to buyer'
        else:
            result='Return to seller'
        
    
    return render_template('NB_model.html', title='nbmodel', prediction=result, show_modal=True)


if __name__ == '__main__':
    app.run(debug=True)
