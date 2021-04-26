<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Trajectory extends Model
{
    protected $fillable =['start_date','trajectory_description'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($trayectories) {
            $trayectories->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
