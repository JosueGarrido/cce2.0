<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategory3IdColumnCategoryLevel4 extends Migration
{
    public function up()
    {
        Schema::table('category_level4s', function (Blueprint $table) {
            $table->unsignedBigInteger('category3_id');
            $table->foreign('category3_id')->references('id')->on('category_level3s')->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::table('category_level4s', function (Blueprint $table) {
            $table->dropForeign(['category3_id']);
        });
    }
}
