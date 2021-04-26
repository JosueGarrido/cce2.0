<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategoryIdColumnProduct extends Migration
{
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('category_id2');
            $table->unsignedBigInteger('category_id3');
            $table->unsignedBigInteger('category_id4');
            $table->foreign('category_id')->references('id')->on('category_level1s')->onDelete('cascade');
            $table->foreign('category_id2')->references('id')->on('category_level2s')->onDelete('cascade');
            $table->foreign('category_id3')->references('id')->on('category_level3s')->onDelete('cascade');
            $table->foreign('category_id4')->references('id')->on('category_level4s')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropForeign(['category_id2']);
            $table->dropForeign(['category_id3']);
            $table->dropForeign(['category_id4']);
        });
    }
}
