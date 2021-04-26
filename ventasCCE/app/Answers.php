<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Answers extends Model
{
    protected $fillable =['answer'];

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
    public function Question()
    {
        return $this->belongsTo('App\Questions');
    }
}
