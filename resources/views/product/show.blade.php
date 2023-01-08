@extends('layouts.main')

@section('bread-title')
    <h1 class="m-0">Товары</h1>
@endsection

@section('bread-chain')
    <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
    <li class="breadcrumb-item"><a href="{{route('product.index')}}">Товары</a></li>
    <li class="breadcrumb-item active">Товар</li>
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <table class="table table-hover text-nowrap">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{{$product->id}}</td>
                    </tr>
                    <tr>
                        <td>Наименование</td>
                        <td>{{$product->name}}</td>
                    </tr>
                    <tr>
                        <td>Описание</td>
                        <td>{{$product->description}}</td>
                    </tr>
                    <tr>
                        <td>Контент</td>
                        <td>{{$product->content}}</td>
                    </tr>
                    <tr>
                        <td>Картинка предосмотра</td>
                        <td><img class="admin-preview-picture" alt=""
                                 src="@if($product->preview_img){{asset('storage/'.$product->preview_img)}}@endif">
                        </td>
                    </tr>
                    <tr>
                        <td>Картинки</td>
                        <td>
                            @foreach($product->images as $item)
                                <img class="admin-preview-picture" src="{{asset('storage/'.$item->image->path)}}"
                                     alt="">
                            @endforeach
                        </td>
                    </tr>
                    <tr>
                        <td>Тэги</td>
                        <td>
                            @foreach($product->tags as $key => $item)
                                {{$item->tag->name}}@if($key+1 !== count($product->tags)), @endif
                            @endforeach
                        </td>
                    </tr>
                    <tr>
                        <td>Цвет{{count($product->colors) > 1 ?'a':''}}</td>
                        <td>
                            @foreach($product->colors as $item)
                                <span class="mr-1"
                                      style="display: inline-block; width: 20px; height: 20px; border-radius: 10px; background: {{$item->color->code}}"></span>
                            @endforeach
                        </td>
                    </tr>
                    <tr>
                        <td>Цена</td>
                        <td>{{'%i',$product->price}}</td>
                    </tr>
                    <tr>
                        <td>Количество</td>
                        <td>{{$product->count}}</td>
                    </tr>
                    <tr>
                        <td>Активен</td>
                        <td>{{$product->is_active ?? 0}}</td>
                    </tr>
                    <tr>
                        <td>Удален</td>
                        <td>{{$product->is_delete ?? 0}}</td>
                    </tr>
                    <tr>
                        <td>Категория</td>
                        <td>{{$product->category->name}}</td>
                    </tr>
                    <tr>
                        <td>Дата создания</td>
                        <td>{{$product->created_at}}</td>
                    </tr>
                    <tr>
                        <td>Дата обновления</td>
                        <td>{{$product->updated_at}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="col-4 d-flex mb-4">
                    <a class="btn btn-info mr-2"
                       href="{{route('product.edit', $product->id)}}">
                        Редактировать
                    </a>
                    <form action="{{route('product.delete', $product->id)}}" method="post">
                        @csrf
                        @method('delete')
                        <button class="btn btn-danger mr-1" type="submit">
                            Удалить
                        </button>
                        <a href="{{route('product.index')}}" class="btn btn-secondary">Отмена</a>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection