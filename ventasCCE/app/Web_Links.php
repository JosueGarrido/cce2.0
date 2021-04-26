<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Web_Links extends Model
{
    protected $fillable = ['link_type','link_description'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($web_links) {
            $web_links->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
