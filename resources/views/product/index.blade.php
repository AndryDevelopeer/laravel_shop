@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Товары</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item active">Товары</li>
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <a class="btn btn-primary" href="{{route('product.create')}}">Добавить</a>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Наименование</th>
                                    <th>Цвет</th>
                                    <th>Категория</th>
                                    <th>Цена</th>
                                    <th>Количество</th>
                                    <th>Активность</th>
                                    <th>Удален</th>
                                    <th>Подробнее</th>
                                    <th>Редактировать</th>
                                    <th>Удалить</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($products as $product)
                                    <tr>
                                        <td>{{$product->id}}</td>
                                        <td>{{$product->name}}</td>
                                        <td>
                                            <div class="d-flex">
                                                @foreach ($product->colors as $value)
                                                    <p class="mr-1"
                                                       style="width: 20px; height: 20px; border-radius: 10px; background: {{$value->color->code}}"></p>
                                                @endforeach
                                            </div>
                                        </td>
                                        <td>{{$product->category->name}}</td>
                                        @php(setlocale(LC_MONETARY, 'ru_RU'))
                                        <td>{{money_format('%i',$product->price)}}</td>
                                        <td>{{$product->count}}</td>
                                        <td>{{$product->is_active}}</td>
                                        <td>{{$product->is_deleted}}</td>
                                        <td>
                                            <a class="btn btn-primary btn-sm"
                                               href="{{route('product.show', $product->id)}}">
                                                <i class="fas fa-folder"></i>
                                                View
                                            </a>
                                        </td>
                                        <td>
                                            <a class="btn btn-info btn-sm"
                                               href="{{route('product.edit', $product->id)}}">
                                                <i class="fas fa-pencil-alt"></i>
                                                Edit
                                            </a>
                                        </td>
                                        <td>
                                            <form action="{{route('product.delete', $product->id)}}" method="post">
                                                @csrf
                                                @method('delete')
                                                <button class="btn btn-danger btn-sm" type="submit">
                                                    <i class="fas fa-trash">
                                                    </i>
                                                    Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">{{ $products->links() }}</div>
    </section>
@endsection
