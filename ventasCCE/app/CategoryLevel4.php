<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel4 extends Model
{
    protected $fillable=['name'];

    public function CategoryLevel3()
    {
        return $this->belongsTo('App\CategoryLevel3');
    }
    public function product()
    {
        return $this->hasMany('App\Product');
    }
}
