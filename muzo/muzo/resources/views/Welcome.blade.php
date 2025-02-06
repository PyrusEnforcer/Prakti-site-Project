@props(['results'=> ''])
<x-layout>
    <header>
        <img src="{{asset('./images/logo.webp')}}" alt="company logo" height="80" width="205" class="brand">
        <div class="bars" id="bars">≡</div>
        <x-nav home="active"/>
    </header>
    <main>
        <div class="hero">
            <div class="heroCard">
                <h1>Special Offer</h1>
                <p>Get a Loan Today!<br>Call: 0973-002-312</p>
            </div>
            <img src="{{asset('./images/hero_happy_employee.webp')}}" alt="hero_happy_employee" class="heroImage"
                loading="lazy" width="398" height="433">
        </div>

        <div class="loancard">
            <h2>Check your loan schedule</h2>
            <form action="/" method="POST">
                @csrf
                <div class="form-control">
                    <label for="basic">Basic Salary</label>
                    <input type="text" name="basic" id="basic" placeholder="ZMW 5000">
                    @error('basic') <div class="error">{{$message}}</div> @enderror
                </div>
                <div class="form-control">
                    <label for="Salary">Net Salary</label>
                    <input type="text" name="salary" id="salary" placeholder="ZMW 8500">
                    @error('salary') <div class="error">{{$message}}</div> @enderror
                </div>

                <button type="submit">Check loan</button>
            </form>
            <div class="loanResults">
                <h1>
                    {{$results}}
                </h1>
            </div>
        </div>

        <div class="services">
            <h2>our services</h2>
            <div class="items" id="items"></div>
        </div>

        <div class="testimonial">
            <h2 class="testimonial-heading">What Our Clients Say</h2>
            <div class="testimonies">
                <!-- first testimony -->
                <div class="testCard">
                    <img src="{{asset('./images/lisa_cudrow.png')}}" alt="lisa_cudrow" class="testImage" loading="lazy"
                        width="350" height="350">
                    <div class="testBody">
                        <h3 class="testName">lisa cudrow</h3>
                        <p class="testQuote">Neque cupiditate assumenda in maiores repudi mollitia architecto.</p>
                    </div>
                </div>

                <!-- second testimony -->
                <div class="testCard">
                    <img src="{{asset('./images/maria_smantha.png')}}" alt="maria_smantha" class="testImage"
                        loading="lazy" width="350" height="350">
                    <div class="testBody">
                        <h3 class="testName">maria smantha</h3>
                        <p class="testQuote">Neque cupiditate assumenda in maiores repudi mollitia architecto.</p>
                    </div>
                </div>

                <!-- third testimony -->
                <div class="testCard">
                    <img src="{{asset('./images/john_smith.png')}}" alt="john_smith" class="testImage" loading="lazy"
                        width="350" height="350">
                    <div class="testBody">
                        <h3 class="testName">john smith</h3>
                        <p class="testQuote">Neque cupiditate assumenda in maiores repudi mollitia architecto.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="archive">
            <div class="arcCard">
                <h2 class="arcHead">Hi, I’m Musonda</h2>
                <p class="arcBody">Xtenda top Agent, I love to help people with their financial goals. On average I help
                    between 150 to 200 people every month get a Loan.</p>
                <span class="arcFoot">call: 0973-002-312</span>
            </div>
            <img src="{{asset('./images/xtenda_top_salesman_award.webp')}}" alt="xtenda_top_salesman_award"
                loading="lazy" width="420" height="548">

        </div>

    </main>
</x-layout>