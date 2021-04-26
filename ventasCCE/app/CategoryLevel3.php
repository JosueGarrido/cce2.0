<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel3 extends Model
{
    protected $fillable=['name'];

    public function CategoryLevel4()
    {
        return $this->hasMany('App\CategoryLevel4');
    }
    public function CategoryLevel2()
    {
        return $this->belongsTo('App\CategoryLevel2');
    }
    public function product()
    {
        return $this->hasMany('App\Product');
    }
}
