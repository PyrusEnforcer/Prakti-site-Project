<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()  {

        return view('Welcome');
    }
    public function promo()  {
        return view('promo');
    }
    public function contact()  {
        return view('contact');
    }

    public function loancheck() {

        $validate = request()->validate(rules: [
            'basic' => 'required | integer',
            'salary' => 'required | integer'
        ]);

        $basic = $validate['basic']; $salary = $validate['salary'];

        $afford = $salary-(0.42*$basic);

        $loans = [3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 60000, 70000, 80000, 90000];
        $percentages = ['6 Months'=>.20203, '12 Months'=>.11803, '18 Months'=>.0901833, '24 Months'=>.0763733, '36 Months'=>.06279, '48 Months'=>.0562167, '60 Months'=>.05244, '72 Months'=>.050053];
        
        foreach ($loans as $loan) {
            
        };

        $result = 0;
        return view('Welcome', compact('results'));
    }
}
