<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Cultural_Projects extends Model
{
protected $fillable=['project_name','project_description','project_type','project_place'];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($cultural_projects) {
            $cultural_projects->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
