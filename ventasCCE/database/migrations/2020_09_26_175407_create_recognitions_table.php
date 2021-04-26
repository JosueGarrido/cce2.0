<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecognitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recognitions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->char('reco_name',30);
            $table->char('reco_description');
            $table->char('reco_type');
            $table->char('reco_place');
            $table->timestamps();
        });
    }

    /**
     * Revers
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recognitions');
    }
}
