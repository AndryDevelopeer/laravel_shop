@extends('layouts.main')
@section('bread-title')
    <h1 class="m-0">Добавить цвет</h1>
@endsection
@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item"><a href="{{route('color.index')}}">Цвета</a></li>
    <li class="breadcrumb-item active">Добавить цвет</li>
@endsection
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <form action="{{route('color.store')}}" method="post">
                            @csrf
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Наименование</label>
                                    <input type="text" class="form-control" name="name" placeholder="Наименование">
                                    @if($errors->has('name'))
                                        <div class="alert-danger"> {{ $errors->first('name') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Код цвета</label>
                                    <input type="text" class="form-control my-colorpicker1 colorpicker-element"
                                           name="code" data-colorpicker-id="1"
                                           placeholder="#000000" data-original-title="" title="">
                                    @if($errors->has('code'))
                                        <div class="alert-danger"> {{ $errors->first('code') }}</div>
                                    @endif
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary mr-1">Сохранить</button>
                                <a href="{{route('color.index')}}" class="btn btn-secondary">Отмена</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection