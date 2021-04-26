<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Reputation extends Model
{
    protected $fillable =['score','comment'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($reputation) {
            $reputation->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id_2');
    }
}
