<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Sale extends Model
{
    protected $fillable=[];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($sale) {
            $sale->user_id = Auth::id();
        });
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function product()
    {
        return $this->belongsTo('App\Product', 'product_id');
    }
}
