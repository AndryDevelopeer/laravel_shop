<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ExternalAuthService
{
    public function checkAuth($request)
    {
        try {
            $url = env('AUTH_APP_URL') . '/api/check-auth';

//            $headers = [
//                'Accept' => 'application/json, text/plain, */*',
//                'Accept-Encoding' => 'gzip, deflate, br',
//                'Accept-Language' => 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6',
//                'Connection' => ' keep-alive',
//                'Content-Length' => '30',
//                'Content-Type' => 'application/json',
//                'Host' => 'localhost:4000',
//                'Origin' => 'http://localhost:8080',
//                'Referer' => 'http://localhost:8080/',
//                'sec-ch-ua' => '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
//                'sec-ch-ua-mobile' => '?0',
//                'sec-ch-ua-platform' => 'macOS',
//                'Sec-Fetch-Dest' => 'empty',
//                'Sec-Fetch-Mode' => 'cors',
//                'Sec-Fetch-Site' => 'same-site',
//                'User-Agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
//            ];

            $response = Http::withHeaders([])->get($url);
            dd($response);
            $statusCode = $response->status();
            $responseBody = json_decode($response->getBody(), true);

            dd($responseBody);
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
