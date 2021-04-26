<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel2 extends Model
{
    protected $fillable=['name'];

    public function CategoryLevel3()
    {
        return $this->hasMany('App\CategoryLevel3');
    }
    public function CategoryLevel1()
    {
        return $this->belongsTo('App\CategoryLevel1');
    }
    public function product()
    {
        return $this->hasMany('App\Product','category_id2');
    }
}
