<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Recognition extends Model
{
    protected $fillable =['reco_name','reco_description','reco_type','reco_place'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($recognition) {
            $recognition->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
