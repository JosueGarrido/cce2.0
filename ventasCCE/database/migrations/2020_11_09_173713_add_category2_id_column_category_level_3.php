<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCategory2IdColumnCategoryLevel3 extends Migration
{
    public function up()
    {
        Schema::table('category_level3s', function (Blueprint $table) {
            $table->unsignedBigInteger('category2_id');
            $table->foreign('category2_id')->references('id')->on('category_level2s')->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::table('category_level3s', function (Blueprint $table) {
            $table->dropForeign(['category2_id']);
        });
    }
}
