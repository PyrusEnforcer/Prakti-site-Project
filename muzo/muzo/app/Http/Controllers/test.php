<?php

$afford = 10000;
$months = 0;
$highestLoan = 0;
$index = 0;
$results = [];


        $loans = [3000, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 60000, 70000, 80000, 90000];
        $percentages = ['6 Months'=>.20203, '12 Months'=>.11803, '18 Months'=>.0901833, '24 Months'=>.0763733, '36 Months'=>.06279, '48 Months'=>.0562167, '60 Months'=>.05244, '72 Months'=>.050053];
        
        foreach ($loans as $loan) {
            foreach ($percentages as $key => $percentage) {
                $ptm = round($percentage*$loan, 2);
                if ($afford >= $ptm) {
                    $results[$index] = [
                        'loan'=> $loan,
                        'ptm'=> $ptm,
                        'Term'=> $key
                    ];
                    $index++;
                };
            };
        };

        foreach ($results as $key => $result) {
            echo $result['loan']. '-'. $result['ptm']. '-'. $result['Term']. '
            ';
        };

