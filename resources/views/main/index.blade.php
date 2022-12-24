@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Главная</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item active">Главная</li>
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                    <a href="#">
                        <div class="info-box">
                            <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>
                            <div class="info-box-content">
                                <span class="info-box-text">Заказы</span>
                                <span class="info-box-number">10</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <a href="{{route('product.index')}}">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-success elevation-1">
                                <i class="fas fa-shopping-cart"></i>
                            </span>
                            <div class="info-box-content">
                                <span class="info-box-text">Товары</span>
                                <span class="info-box-number">{{$productsCount}}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <a href="{{route('user.index')}}">
                        <div class="info-box mb-3">
                            <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>
                            <div class="info-box-content">
                                <span class="info-box-text">Пользователи</span>
                                <span class="info-box-number">{{$usersCount}}</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <a href="#">
                        <div class="info-box mb-3">
                                <span class="info-box-icon bg-danger elevation-1">
                                    <i class="fas fa-thumbs-up"></i></span>
                            <div class="info-box-content">
                                <span class="info-box-text">Отзывы</span>
                                <span class="info-box-number">2</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="clearfix hidden-md-up"></div>
            </div>
        </div>
    </section>
@endsection