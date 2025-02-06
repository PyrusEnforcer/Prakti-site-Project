@props(['home'=>'','contact'=>'','promo'=>''])
<nav id="nav" class="nav">
    <a href="{{route('welcome')}}" class="{{$home}}">home</a>
    <a href="{{route('contact')}}" class="{{$contact}}">contact</a>
    <a href="{{route('promo')}}" class="{{$promo}}">promotions</a>
</nav>