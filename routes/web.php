<?php

use App\Http\Controllers\JobPostsController;
use App\Http\Controllers\CompanyController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

Route::resource('jobs', JobPostsController::class)->only(['index']);
Route::resource('company', CompanyController::class)->only(['show']);