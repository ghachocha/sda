w<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChMemberTransferTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ch_member_transfer', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('member_id');
            $table->tinyInteger('is_incoming');
            $table->tinyInteger('is_outgoing');
            $table->integer('is_first_approved');
            $table->integer('is_second_approved');
            $table->integer('is_accepted');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('ch_member_transfer');
    }
}
