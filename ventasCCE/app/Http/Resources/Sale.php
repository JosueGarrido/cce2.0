<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Sale extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     *    $table->bigIncrements('id');


     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'user_id' => $this ->user_id,
            'user_data' => "/api/users/" . $this->user_id,
            'user' => $this->user,
            'product_data' => "/api/users/" . $this->product_id,
            'product' => $this->product,
            'product_id' => $this ->product_id,
            'created_at' => $this->created_at,

        ];
    }
}
