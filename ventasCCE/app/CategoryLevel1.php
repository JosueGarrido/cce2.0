<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryLevel1 extends Model
{
    protected $fillable=['name'];

    public function product()
    {
        return $this->hasMany('App\Product', 'category_id');
    }
    public function photo_format()
    {
        return $this->hasMany('App\PhotoFormat');
    }
    public function audio_video_format()
    {
        return $this->hasMany('App\AudioVideoFormat');
    }
    public function CategoryLevel2()
    {
        return $this->hasMany('App\CategoryLevel2');
    }
}

