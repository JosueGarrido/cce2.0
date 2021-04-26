<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Questions extends Model
{
    protected $fillable =['question'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($questions) {
            $questions->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function Product()
    {
        return $this->belongsTo('App\Product');
    }
    public function answer()
    {
        return $this->hasMany('App\Answers');
    }
}
