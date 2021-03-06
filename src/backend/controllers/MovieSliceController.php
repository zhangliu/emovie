<?php

namespace app\controllers;

use Yii;
use yii\filters\Cors;
use yii\web\Controller;
use app\models\MovieSlice;

class MovieSliceController extends Controller{
  public $enableCsrfValidation=false;
  public function behaviors(){
    return [
      'corsFilter' => Yii::$app->params['corsFilter'],
    ];
  }

  public function actionGet() {
    $movieSlice = MovieSlice::findOne(Yii::$app->request->get()['id']);
    return $movieSlice->attributes;
  }

  // public function actionGetfirstslice() {
  //   $slice = MovieSlice::find()
  //     ->where(['movie_id' => \YII::$app->request->get('movieId')])
  //     ->orderBy('order_id')
  //     ->one();
  //   return $slice->attributes;
  // }

  public function actionGetallslices() {
    $movieSlices = MovieSlice::find()
      ->where(['movie_id' => \Yii::$app->request->get('movieId')])
      ->all();
    $result = array();
    foreach($movieSlices as $slice) {
      $result[] = $slice->attributes;
    }
    return $result;
  }
}
