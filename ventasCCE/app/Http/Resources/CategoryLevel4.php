<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryLevel4 extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     *    $table->bigIncrements('id');
    $table->string('name',50);
     */
    public function toArray($request)
    {
        return [
            'id' => $this ->id,
            'name' => $this ->name,


        ];
    }
}
