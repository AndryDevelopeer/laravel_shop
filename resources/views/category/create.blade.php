@extends('layouts.main')
@section('bread-title')
    <h1 class="m-0">Добавить категорию</h1>
@endsection
@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item">Категории</li>
    <li class="breadcrumb-item active">Добавить категорию</li>
@endsection
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary">
                        <form action="{{route('category.store')}}" method="post">
                            @csrf
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Наименование</label>
                                    <input type="text" class="form-control" name="title" placeholder="Наименование">
                                    @if($errors->has('title'))
                                        <div class="alert-danger"> {{ $errors->first('title') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Описание</label>
                                    <input type="text" class="form-control" name="description" placeholder="Описание">
                                    @if($errors->has('description'))
                                        <div class="alert-danger"> {{ $errors->first('description') }}</div>
                                    @endif
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" value="1" name="active">
                                    <label class="form-check-label" for="exampleCheck1">Активность</label>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary mr-1">Сохранить</button>
                                <a href="{{route('category.index')}}" class="btn btn-secondary">Отмена</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection