
import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

// ========================
// NATURE SOUND CONTROL
// ========================

function NatureSoundControl() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleSound = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        audioRef.current.volume = 0.7
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Audio playback failed:', error)
      }
    }
  }

  return (
    <div className="nature-sound-control">
      <audio
        ref={audioRef}
        src="/nature-sounds.mp3"
        loop
        preload="none"
      />

      <button onClick={toggleSound}>
        {isPlaying ? 'Sound Off' : 'Sound On'}
      </button>

      <span>Forest ambience</span>
    </div>
  )
}

// ========================
// NAVIGATION
// ========================
function SmoothLink({ to, children, className }) {
  const navigate = useNavigate()
  const [isLeaving, setIsLeaving] = useState(false)

  const handleClick = (e) => {
    if (
      e.button !== 0 ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey
    ) return

    e.preventDefault()

    if (window.location.pathname === to) return

    setIsLeaving(true)
    document.body.classList.add('page-leaving')

    setTimeout(() => {
      navigate(to)
      window.scrollTo({ top: 0, left: 0 })
      document.body.classList.remove('page-leaving')
      setIsLeaving(false)
    }, 250)
  }

  return (
    <Link
      to={to}
      className={className}
      onClick={handleClick}
      aria-disabled={isLeaving}
    >
      {children}
    </Link>
  )
} 
function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="brand">
        <span className="brand-icon">E</span>
        <span>
          Eco<span className="brand-dot">Pulse</span>
        </span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mission">Our Mission</Link>
        <Link to="/climate-impact">Climate Impact</Link>
        <Link to="/challenge">Eco Challenge</Link>
        <Link to="/actions">Take Action</Link>
        <Link to="/temperature-game">Temperature Takedown</Link>
      </div> 

      <Link to="/calculator" className="nav-button">
        Carbon Calculator
      </Link>

    </nav>
  )
}

// ========================
// HOME PAGE
// ========================


function Home() {
  return (
    <main className="app">

      <section className="hero">


        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="eyebrow">
            <span className="live-dot"></span>
            A GREENER TOMORROW STARTS TODAY
          </div>

          <h1>
            The future of our planet
            <span> is in our hands.</span>
          </h1>

          <p className="hero-description">
            Discover how small everyday choices can create
            a meaningful impact on our environment.
            Together, we can build a cleaner, greener and
            more sustainable world.
          </p>

          <div className="hero-actions">

            <Link to="/actions" className="primary-button">
              Explore ways to help
            </Link>

            <Link to="/mission" className="text-button">
              Discover our mission
            </Link>

          </div>

        </div>

        <div className="hero-bottom">
          PROTECT • PRESERVE • RESTORE
        </div>

      </section>

      <section className="home-intro">

        <div className="eyebrow">
          WHY IT MATTERS
        </div>

        <h2>
          Our planet needs a little more care.
        </h2>

        <p>
          Every action matters. From conserving water to
          reducing waste, the choices we make today shape
          the environment we leave behind.
        </p>

        <div className="feature-grid">

          <article className="feature-card">
            <h3>Protect Nature</h3>
            <p>
              Preserve forests, protect wildlife and
              respect the ecosystems that sustain life.
            </p>
            <Link to="/mission" className="card-link">
              Learn more →
            </Link>
          </article>

          <article className="feature-card">
            <h3>Understand Your Impact</h3>
            <p>
              Learn how everyday activities affect the
              environment and contribute to emissions.
            </p>
            <Link to="/calculator" className="card-link">
              Explore calculator →
            </Link>
          </article>

          <article className="feature-card">
            <h3>Make a Difference</h3>
            <p>
              Turn awareness into action through
              simple and sustainable habits.
            </p>
            <Link to="/actions" className="card-link">
              Take action →
            </Link>
          </article>

        </div>

      </section>

    </main>
  )
}


// ========================
// MISSION PAGE
// ========================

function Mission() {
  return (
    <main className="inner-page mission-page">

      <div className="eyebrow">
        OUR PURPOSE
      </div>

      <h1>
        A mission for a <span>greener planet.</span>
      </h1>

      <p>
        EcoPulse is built around one simple idea:
        a healthier planet begins with informed
        individuals and responsible communities.
      </p>
      <img
  className="mission-image"
  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85"
  alt="A lush green forest"
 />

      <div className="detail-grid">

        <article className="detail-card">
          <h2>Our Vision</h2>
          <p>
            A world where people and nature thrive
            together through responsible choices
            and sustainable living.
          </p>
        </article>

        <article className="detail-card">
          <h2>Our Mission</h2>
          <p>
            To spread environmental awareness,
            encourage positive action and make
            sustainability part of everyday life.
          </p>
        </article>

        <article className="detail-card">
          <h2>Our Values</h2>
          <p>
            Responsibility, conservation, awareness,
            cooperation and respect for nature.
          </p>
        </article>

        <article className="detail-card">
          <h2>Our Approach</h2>
          <p>
            We believe that knowledge, small actions
            and collective efforts can contribute
            to a healthier planet.
          </p>
        </article>

      </div>

    </main>
  )
}

// ========================
// IMPACT PAGE
// ========================

function Impact() {
  return (
    <main className="inner-page">

      <div className="eyebrow">
        UNDERSTANDING OUR PLANET
      </div>

      <h1>
        Every choice leaves an <span>impact.</span>
      </h1>

      <p>
        Discover some of the environmental challenges
        that make sustainable living so important.
      </p>

      <div className="detail-grid">

        <article className="detail-card">
          <h2>Climate Change</h2>
          <p>
            Greenhouse gas emissions contribute to
            rising global temperatures and changing
            weather patterns.
          </p>
        </article>

        <article className="detail-card">
          <h2>Deforestation</h2>
          <p>
            The loss of forests threatens biodiversity,
            destroys natural habitats and affects
            the balance of our climate.
          </p>
        </article>

        <article className="detail-card">
          <h2>Plastic Pollution</h2>
          <p>
            Plastic waste pollutes land and oceans,
            affecting wildlife and damaging
            natural ecosystems.
          </p>
        </article>

        <article className="detail-card">
          <h2>Water Scarcity</h2>
          <p>
            Water pollution and wastage put pressure
            on freshwater resources that communities
            depend on.
          </p>
        </article>

      </div>

    </main>
  )
}

// ========================
// TAKE ACTION PAGE
// ========================


function Actions() {
  const actions = [
    {
      title: "Save Electricity",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
      alt: "Light bulb representing electricity",
      description: (
        <>
          Switch off lights and appliances when
          they are not needed. Make use of
          natural daylight.
        </>
      )
    },
    {
      title: "Conserve Water",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85",
      alt: "Clean flowing water",
      description: (
        <>
          Turn off taps when not in use and
          avoid unnecessary water wastage.
        </>
      )
    },
    {
      title: "Reduce Plastic",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=900&q=85",
      alt: "Reusable shopping bags",
      description: (
        <>
          Carry reusable bags and bottles instead
          of relying on single-use plastic.
        </>
      )
    },
    {
      title: "Travel Responsibly",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85",
      alt: "Green tree-lined surroundings",
      description: (
        <>
          Walk, cycle or use public transport
          when practical to reduce emissions.
        </>
      )
    },
    {
      title: "Reduce Waste",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85",
      alt: "Recycling and waste sorting",
      description: (
        <>
          Reuse materials, recycle correctly
          and avoid unnecessary purchases.
        </>
      )
    },
    {
      title: "Protect Green Spaces",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85",
      alt: "Growing and caring for plants",
      description: (
        <>
          Care for plants, protect local green
          spaces and support biodiversity.
        </>
      )
    }
  ];

  return (
    <main className="inner-page">

      <div className="eyebrow">
        SMALL STEPS, BIGGER CHANGE
      </div>

      <h1>
        Make sustainability <span>a habit.</span>
      </h1>

      <p>
        You do not need to make huge changes overnight.
        Start with practical actions that fit into
        your everyday routine.
      </p>

      <div className="detail-grid">

        {actions.map((action) => (
          <article className="detail-card action-card" key={action.title}>

            <img
              className="action-image"
              src={action.image}
              alt={action.alt}
              loading="lazy"
            />

            <h2>{action.title}</h2>

            <p>{action.description}</p>

          </article>
        ))}

      </div>

    </main>
  )
}


// ========================
// CALCULATOR PAGE
// ========================



function Calculator() {
  const [period, setPeriod] = useState('weekly')
  const [electricity, setElectricity] = useState('')
  const [carDistance, setCarDistance] = useState('')
  const [waste, setWaste] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculateFootprint = (e) => {
    e.preventDefault()

    const values = [electricity, carDistance, waste]

    if (
      values.some(value => value.trim() === '') ||
      values.some(value => !Number.isFinite(Number(value)) || Number(value) < 0)
    ) {
      setError('Please enter valid, non-negative values in all three fields.')
      setResult(null)
      return
    }

    // Convert weekly values into monthly values.
    const multiplier = period === 'weekly' ? 4.33 : 1

    const electricityEmissions =
      Number(electricity) * multiplier * 0.70

    const travelEmissions =
      Number(carDistance) * multiplier * 0.17

    const wasteEmissions =
      Number(waste) * multiplier * 0.50

    const monthlyTotal =
      electricityEmissions + travelEmissions + wasteEmissions

    setResult({
      electricity: electricityEmissions,
      travel: travelEmissions,
      waste: wasteEmissions,
      monthly: monthlyTotal,
      yearly: monthlyTotal * 12
    })

    setError('')
  }

  const resetCalculator = () => {
    setPeriod('weekly')
    setElectricity('')
    setCarDistance('')
    setWaste('')
    setResult(null)
    setError('')
  }

  const percentage = (value) =>
    result && result.monthly > 0
      ? (value / result.monthly) * 100
      : 0

  const breakdown = result
    ? [
        { name: 'Electricity', value: result.electricity, color: 'electricity-bar' },
        { name: 'Car travel', value: result.travel, color: 'travel-bar' },
        { name: 'Household waste', value: result.waste, color: 'waste-bar' }
      ]
    : []

  return (
    <main className="inner-page calculator-page">

      <div className="eyebrow">
        <span className="live-dot"></span>
        YOUR ENVIRONMENTAL IMPACT
      </div>

      <h1>
        Calculate your <span>carbon footprint.</span>
      </h1>

      <p className="calculator-intro">
        Discover how your everyday activities contribute
        to carbon emissions. Enter your details to receive
        an estimated footprint.
      </p>

      <div className="calculator-layout">

        <form className="calculator-form" onSubmit={calculateFootprint}>

          <h2>Your lifestyle details</h2>

          <p className="calculator-subtitle">
            Choose your calculation period and enter your average usage.
          </p>

          <div className="calculator-field">
            <label htmlFor="calculation-period">
              Calculation period
            </label>

            <select
              id="calculation-period"
              value={period}
              onChange={e => {
                setPeriod(e.target.value)
                setResult(null)
                setError('')
              }}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <small>
              Select whether your entries represent a week or a month.
            </small>
          </div>

          <div className="calculator-field">
            <label htmlFor="electricity">
              {period === 'weekly' ? 'Weekly' : 'Monthly'} electricity consumption
            </label>

            <div className="input-with-unit">
              <input
                id="electricity"
                type="number"
                min="0"
                step="any"
                placeholder="Example: 150"
                value={electricity}
                onChange={e => setElectricity(e.target.value)}
              />
              <span>kWh</span>
            </div>

            <small>Check your household electricity bill.</small>
          </div>

          <div className="calculator-field">
            <label htmlFor="carDistance">
              {period === 'weekly' ? 'Weekly' : 'Monthly'} car travel distance
            </label>

            <div className="input-with-unit">
              <input
                id="carDistance"
                type="number"
                min="0"
                step="any"
                placeholder="Example: 50"
                value={carDistance}
                onChange={e => setCarDistance(e.target.value)}
              />
              <span>km</span>
            </div>

            <small>Total distance travelled by car during the selected period.</small>
          </div>

          <div className="calculator-field">
            <label htmlFor="waste">
              {period === 'weekly' ? 'Weekly' : 'Monthly'} household waste
            </label>

            <div className="input-with-unit">
              <input
                id="waste"
                type="number"
                min="0"
                step="any"
                placeholder="Example: 5"
                value={waste}
                onChange={e => setWaste(e.target.value)}
              />
              <span>kg</span>
            </div>

            <small>Approximate waste produced by your household during the selected period.</small>
          </div>

          {error && (
            <p className="calculator-error" role="alert">
              {error}
            </p>
          )}

          <div className="calculator-buttons">
            <button type="submit" className="primary-button">
              Calculate my footprint
            </button>

            <button
              type="button"
              className="calculator-reset"
              onClick={resetCalculator}
            >
              Reset
            </button>
          </div>

        </form>

        <section className="calculator-result" aria-live="polite">

          {!result ? (
            <div className="result-empty">
              <div className="result-symbol">CO₂</div>
              <h2>Your results will appear here.</h2>
              <p>
                Enter all three values and calculate your
                estimated carbon footprint.
              </p>
            </div>
          ) : (
            <div className="result-filled">

              <p className="result-label">
                ESTIMATED MONTHLY CARBON FOOTPRINT
              </p>

              <div className="result-number">
                {result.monthly.toFixed(1)}
                <span> kg CO₂e</span>
              </div>

              <p className="result-yearly">
                Approximately {result.yearly.toFixed(1)} kg CO₂e per year
              </p>

              <div className="result-divider"></div>

              <h3>Emissions breakdown</h3>

              {breakdown.map(item => (
                <div className="breakdown-row" key={item.name}>

                  <div className="breakdown-label">
                    <span>{item.name}</span>
                    <strong>{item.value.toFixed(1)} kg</strong>
                  </div>

                  <div className="breakdown-track">
                    <div
                      className={`breakdown-fill ${item.color}`}
                      style={{ width: `${percentage(item.value)}%` }}
                    ></div>
                  </div>

                </div>
              ))}

              {result.monthly === 0 && (
                <p className="calculator-note">
                  All three entered values are zero.
                </p>
              )}

              <p className="calculator-note">
                These are simplified estimates, not official
                measurements. Actual emissions depend on your
                electricity source, vehicle, fuel and waste disposal.
              </p>

            </div>
          )}

        </section>

      </div>

      <section className="calculator-information">

        <h2>How are emissions estimated?</h2>

        <div className="detail-grid">

          <article className="detail-card">
            <h3>Electricity</h3>
            <p>0.70 kg CO₂e per kWh consumed.</p>
          </article>

          <article className="detail-card">
            <h3>Car travel</h3>
            <p>0.17 kg CO₂e per kilometre travelled.</p>
          </article>

          <article className="detail-card">
            <h3>Household waste</h3>
            <p>0.50 kg CO₂e per kg of waste produced.</p>
          </article>

        </div>

        <p className="calculator-disclaimer">
          These factors are illustrative assumptions for this
          demonstration. Weekly values are multiplied by 4.33
          to estimate monthly emissions. This calculator covers
          three emission sources and does not represent a complete
          household carbon footprint.
        </p>

      </section>

    </main>
  )
}



// ========================
// FOOTER
// ========================
function Challenge() {
  const tasks = [
    'Avoid single-use plastic today',
    'Switch off unused lights',
    'Save water while brushing',
    'Use a reusable water bottle',
    'Walk or cycle for a short journey'
  ]

  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('eco-challenge') || '[]')
    } catch {
      return []
    }
  })

  const toggleTask = (index) => {
    const updated = completed.includes(index)
      ? completed.filter(item => item !== index)
      : [...completed, index]

    setCompleted(updated)
    localStorage.setItem('eco-challenge', JSON.stringify(updated))
  }

  const progress = (completed.length / tasks.length) * 100

  return (
    <main className="inner-page challenge-page">
      <div className="eyebrow">
        <span className="live-dot"></span>
        TAKE THE CHALLENGE
      </div>

      <h1>Small actions. <span>Big impact.</span></h1>

      <p className="calculator-intro">
        Take on these five simple challenges and make more
        sustainable choices in your everyday life.
      </p>

      <section className="challenge-card">
        <div className="challenge-top">
          <div>
            <p className="result-label">YOUR PROGRESS</p>
            <h2>{completed.length} of 5 completed</h2>
          </div>
          <div className="challenge-points">
            {completed.length * 10}
            <span> / 50 points</span>
          </div>
        </div>

        <div className="challenge-track">
          <div
            className="challenge-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="challenge-tasks">
          {tasks.map((task, index) => (
            <label className="challenge-task" key={index}>
              <input
                type="checkbox"
                checked={completed.includes(index)}
                onChange={() => toggleTask(index)}
              />
              <span>{task}</span>
              <strong>+10</strong>
            </label>
          ))}
        </div>

        {completed.length === 5 && (
          <div className="challenge-complete">
            Challenge completed! Great work.
          </div>
        )}

        <button
          className="calculator-reset"
          onClick={() => {
            setCompleted([])
            localStorage.removeItem('eco-challenge')
          }}
        >
          Reset challenge
        </button>
      </section>
    </main>
  )
}

const wasteItems = [
  // Wet and compostable waste
  { name: 'Banana peel', aliases: ['banana skin'], category: 'Wet waste', bin: 'Compost bin', advice: 'Compost it where a suitable composting facility is available.' },
  { name: 'Apple core', aliases: ['apple', 'fruit core'], category: 'Wet waste', bin: 'Compost bin', advice: 'Add to organic waste or compost.' },
  { name: 'Vegetable peels', aliases: ['potato peel', 'carrot peel', 'onion peel'], category: 'Wet waste', bin: 'Compost bin', advice: 'Collect separately for composting.' },
  { name: 'Leftover rice', aliases: ['cooked rice', 'food leftovers'], category: 'Wet waste', bin: 'Wet waste bin', advice: 'Keep food scraps separate from dry recyclables.' },
  { name: 'Bread', aliases: ['stale bread'], category: 'Wet waste', bin: 'Wet waste bin', advice: 'Place in organic waste collection.' },
  { name: 'Tea leaves', aliases: ['used tea leaves'], category: 'Wet waste', bin: 'Compost bin', advice: 'Suitable for composting.' },
  { name: 'Coffee grounds', aliases: ['used coffee'], category: 'Wet waste', bin: 'Compost bin', advice: 'Add to compost.' },
  { name: 'Eggshells', aliases: ['egg shell'], category: 'Wet waste', bin: 'Compost bin', advice: 'Crush and add to compost.' },
  { name: 'Flowers', aliases: ['wilted flowers', 'flower waste'], category: 'Wet waste', bin: 'Compost bin', advice: 'Separate from plastic decorations and compost.' },
  { name: 'Dry leaves', aliases: ['fallen leaves'], category: 'Wet waste', bin: 'Compost bin', advice: 'Use for composting or leaf mulch.' },
  { name: 'Coconut shells', aliases: ['coconut husk'], category: 'Wet waste', bin: 'Organic waste collection', advice: 'Keep separate; check whether your local composting service accepts them.' },
  { name: 'Peanut shells', aliases: ['groundnut shells'], category: 'Wet waste', bin: 'Compost bin', advice: 'Can be composted slowly.' },
  { name: 'Small twigs', aliases: ['sticks'], category: 'Wet waste', bin: 'Garden waste', advice: 'Collect separately as garden waste.' },
  { name: 'Spoiled vegetables', aliases: ['rotten vegetables'], category: 'Wet waste', bin: 'Wet waste bin', advice: 'Keep separate from packaging.' },

  // Dry recyclable waste
  { name: 'Newspaper', aliases: ['old newspaper'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Keep clean and dry.' },
  { name: 'Cardboard box', aliases: ['carton box', 'shipping box'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Flatten it and keep it dry.' },
  { name: 'Notebook', aliases: ['old notebook', 'exercise book'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Remove plastic covers and metal spirals if possible.' },
  { name: 'Paper sheets', aliases: ['writing paper', 'printed paper'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Keep clean and dry.' },
  { name: 'Paper bag', aliases: ['brown paper bag'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Recycle if clean and not coated.' },
  { name: 'Paper envelope', aliases: ['envelope'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Remove plastic windows if required by your recycler.' },
  { name: 'Glass bottle', aliases: ['glass jar'], category: 'Dry recyclable', bin: 'Glass recycling', advice: 'Empty and rinse. Keep broken glass safely wrapped and labelled.' },
  { name: 'Glass jar', aliases: ['jam jar', 'pickle jar'], category: 'Dry recyclable', bin: 'Glass recycling', advice: 'Empty and rinse before recycling.' },
  { name: 'Aluminium can', aliases: ['soda can', 'soft drink can'], category: 'Dry recyclable', bin: 'Metal recycling', advice: 'Empty and rinse.' },
  { name: 'Steel tin', aliases: ['food tin', 'metal tin'], category: 'Dry recyclable', bin: 'Metal recycling', advice: 'Empty and rinse.' },
  { name: 'Metal lid', aliases: ['jar lid'], category: 'Dry recyclable', bin: 'Metal recycling', advice: 'Separate from the container if your recycler requires it.' },
  { name: 'Plastic water bottle', aliases: ['pet bottle', 'water bottle'], category: 'Dry recyclable', bin: 'Plastic recycling', advice: 'Empty, rinse and dry. Check local acceptance.' },
  { name: 'Plastic shampoo bottle', aliases: ['shampoo container'], category: 'Dry recyclable', bin: 'Plastic recycling', advice: 'Empty and rinse before recycling if accepted locally.' },
  { name: 'Plastic detergent bottle', aliases: ['washing liquid bottle'], category: 'Dry recyclable', bin: 'Plastic recycling', advice: 'Empty and rinse thoroughly.' },
  { name: 'Plastic container', aliases: ['food container', 'plastic box'], category: 'Dry recyclable', bin: 'Plastic recycling', advice: 'Check the material and local recycling rules.' },
  { name: 'Plastic bucket', aliases: ['old bucket'], category: 'Dry recyclable', bin: 'Plastic collection', advice: 'Check whether your local collector accepts this type of plastic.' },
  { name: 'Plastic chair', aliases: ['broken plastic chair'], category: 'Dry recyclable', bin: 'Plastic collection', advice: 'Contact a plastic scrap collector if it is not accepted in household recycling.' },
  { name: 'Milk packet', aliases: ['milk pouch'], category: 'Dry recyclable', bin: 'Plastic collection', advice: 'Empty, rinse and dry. Check local collection arrangements.' },
  { name: 'Newspaper bundle', aliases: ['old newspapers'], category: 'Dry recyclable', bin: 'Paper recycling', advice: 'Tie together and keep dry.' },
  { name: 'Clean cloth', aliases: ['old cotton cloth', 'fabric scraps'], category: 'Reusable', bin: 'Textile collection', advice: 'Donate or reuse if in good condition; otherwise find a textile collector.' },
  { name: 'Old clothes', aliases: ['used clothes', 'shirts', 'trousers'], category: 'Reusable', bin: 'Textile collection', advice: 'Donate wearable clothes. Use textile recycling for damaged ones.' },
  { name: 'Shoes', aliases: ['old shoes', 'footwear'], category: 'Special collection', bin: 'Reuse or footwear collection', advice: 'Donate usable pairs or find a suitable collection programme.' },
  { name: 'Metal spoon', aliases: ['steel spoon'], category: 'Dry recyclable', bin: 'Metal recycling', advice: 'Reuse or give to a metal scrap collector.' },
  { name: 'Aluminium foil', aliases: ['food foil'], category: 'Dry recyclable', bin: 'Metal recycling', advice: 'Clean foil may be recyclable; check local acceptance.' },
  { name: 'Plastic wrapper', aliases: ['snack wrapper', 'chips packet'], category: 'General waste', bin: 'General waste collection', advice: 'Most multilayer snack wrappers are not accepted in ordinary recycling. Check for a special collection programme.' },
  { name: 'Plastic straw', aliases: ['drinking straw'], category: 'General waste', bin: 'General waste collection', advice: 'Usually not accepted in ordinary recycling. Avoid single-use straws where possible.' },
  { name: 'Thermocol', aliases: ['styrofoam', 'foam packaging'], category: 'Special collection', bin: 'Special plastic collection', advice: 'Check for a local foam collection facility; do not assume it is accepted with ordinary plastic.' },
  { name: 'Bubble wrap', aliases: ['plastic bubble packaging'], category: 'Special collection', bin: 'Plastic film collection', advice: 'Reuse if possible. Check whether a local film-plastic collector accepts it.' },
  { name: 'Plastic bag', aliases: ['polythene bag', 'carry bag'], category: 'Special collection', bin: 'Plastic film collection', advice: 'Reuse it or take it to a collection point that accepts plastic films.' },
  { name: 'Broken ceramic cup', aliases: ['ceramic plate', 'broken mug'], category: 'General waste', bin: 'General waste collection', advice: 'Wrap safely and label it so handlers are not injured. It is not ordinary glass recycling.' },

  // E-waste
  { name: 'Mobile phone', aliases: ['old phone', 'smartphone'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Do not put it in household bins. Use an authorised e-waste collection point.' },
  { name: 'Laptop', aliases: ['old laptop', 'notebook computer'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Use an authorised e-waste recycler.' },
  { name: 'Computer keyboard', aliases: ['keyboard'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Send to an authorised e-waste collection point.' },
  { name: 'Computer mouse', aliases: ['mouse'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Send to an authorised e-waste collection point.' },
  { name: 'Charging cable', aliases: ['phone cable', 'USB cable'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Collect separately as electronic waste.' },
  { name: 'Charger adapter', aliases: ['phone charger', 'power adapter'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Do not mix with ordinary waste.' },
  { name: 'Headphones', aliases: ['earphones', 'earbuds'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Use an e-waste collection point.' },
  { name: 'Television', aliases: ['TV', 'old television'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Arrange collection through an authorised e-waste recycler.' },
  { name: 'Remote control', aliases: ['TV remote'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Remove batteries and send the device to e-waste collection.' },
  { name: 'Computer monitor', aliases: ['monitor', 'screen'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Use authorised e-waste collection.' },
  { name: 'Printer', aliases: ['old printer'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Use authorised e-waste collection.' },
  { name: 'Electric toy', aliases: ['electronic toy'], category: 'E-waste', bin: 'Authorised e-waste collection', advice: 'Remove batteries where safe and send the toy to e-waste collection.' },
  { name: 'Power bank', aliases: ['portable charger'], category: 'E-waste', bin: 'Battery or e-waste collection', advice: 'Never place damaged or swollen batteries in household bins. Use an authorised collection point.' },

  // Hazardous and special waste
  { name: 'Used battery', aliases: ['AA battery', 'AAA battery', 'dry cell'], category: 'Hazardous waste', bin: 'Battery collection point', advice: 'Keep separate and take to a designated battery collection point.' },
  { name: 'Button battery', aliases: ['watch battery'], category: 'Hazardous waste', bin: 'Battery collection point', advice: 'Keep away from children and use a designated battery collection point.' },
  { name: 'Tube light', aliases: ['fluorescent tube'], category: 'Hazardous waste', bin: 'Special lamp collection', advice: 'Do not break it. Use a designated lamp or hazardous-waste collection service.' },
  { name: 'CFL bulb', aliases: ['compact fluorescent bulb'], category: 'Hazardous waste', bin: 'Special lamp collection', advice: 'Keep intact and take to a designated collection point.' },
  { name: 'LED bulb', aliases: ['LED light'], category: 'E-waste', bin: 'E-waste collection', advice: 'Collect separately for appropriate electronic-waste handling.' },
  { name: 'Paint container', aliases: ['paint tin', 'paint can'], category: 'Hazardous waste', bin: 'Special collection', advice: 'Follow the paint label and local hazardous-waste instructions. Do not pour leftover paint into drains.' },
  { name: 'Pesticide container', aliases: ['insecticide bottle'], category: 'Hazardous waste', bin: 'Special collection', advice: 'Do not reuse it or put it in ordinary recycling. Follow the product label and local disposal guidance.' },
  { name: 'Cleaning chemical bottle', aliases: ['chemical container'], category: 'Hazardous waste', bin: 'Special collection', advice: 'Keep chemicals in their original labelled container and follow local disposal guidance.' },
  { name: 'Expired medicine', aliases: ['old medicine', 'unused tablets'], category: 'Hazardous waste', bin: 'Medicine take-back collection', advice: 'Ask a pharmacy or authorised medicine take-back service. Do not flush medicines.' },
  { name: 'Thermometer', aliases: ['mercury thermometer'], category: 'Hazardous waste', bin: 'Special collection', advice: 'Do not break it. Contact a suitable hazardous-waste service.' },

  // Sanitary waste
  { name: 'Sanitary pad', aliases: ['used pad'], category: 'Sanitary waste', bin: 'Wrapped sanitary waste', advice: 'Wrap securely and follow your local sanitary-waste collection instructions.' },
  { name: 'Diaper', aliases: ['nappy', 'used diaper'], category: 'Sanitary waste', bin: 'Wrapped sanitary waste', advice: 'Wrap securely and place in the designated sanitary-waste stream.' },
  { name: 'Tissue paper', aliases: ['used tissue', 'paper tissue'], category: 'General waste', bin: 'General waste collection', advice: 'Used tissues are generally not accepted with recyclable paper.' },
  { name: 'Cotton swab', aliases: ['earbud cotton swab'], category: 'General waste', bin: 'General waste collection', advice: 'Place in general waste.' },
  { name: 'Bandage', aliases: ['used bandage', 'gauze'], category: 'Sanitary waste', bin: 'Wrapped sanitary waste', advice: 'Wrap securely and follow local healthcare or sanitary-waste guidance.' },
  { name: 'Face mask', aliases: ['disposable mask'], category: 'Sanitary waste', bin: 'Wrapped sanitary waste', advice: 'Place in a securely closed bag and follow local waste instructions.' },

  // Other everyday objects
  { name: 'Toothbrush', aliases: ['old toothbrush'], category: 'General waste', bin: 'General waste collection', advice: 'Most mixed-material toothbrushes are not accepted in ordinary recycling.' },
  { name: 'Toothpaste tube', aliases: ['empty toothpaste tube'], category: 'General waste', bin: 'General waste collection', advice: 'Most mixed-material tubes are difficult to recycle. Check for a specialist programme.' },
  { name: 'Soap wrapper', aliases: ['soap packaging'], category: 'General waste', bin: 'General waste collection', advice: 'Check the material. Clean paper packaging may be recyclable.' },
  { name: 'Plastic comb', aliases: ['hair comb'], category: 'General waste', bin: 'General waste collection', advice: 'Reuse if possible; mixed or small plastic items may not be accepted for recycling.' },
  { name: 'Pen', aliases: ['ball pen', 'ballpoint pen'], category: 'General waste', bin: 'General waste collection', advice: 'Most pens contain mixed materials and are not accepted in ordinary recycling.' },
  { name: 'Pencil', aliases: ['used pencil'], category: 'General waste', bin: 'General waste collection', advice: 'Small mixed-material items usually go in general waste.' },
  { name: 'Marker', aliases: ['permanent marker', 'whiteboard marker'], category: 'General waste', bin: 'General waste collection', advice: 'Check for a stationery take-back programme.' },
  { name: 'Ruler', aliases: ['plastic ruler'], category: 'General waste', bin: 'General waste collection', advice: 'Reuse if possible; recycling depends on its material and local collection.' },
  { name: 'Rubber band', aliases: ['elastic band'], category: 'General waste', bin: 'General waste collection', advice: 'Reuse if possible. Usually not accepted in ordinary recycling.' },
  { name: 'Broken toy', aliases: ['plastic toy'], category: 'Special collection', bin: 'Reuse or suitable material collection', advice: 'Separate batteries and electronic parts first. Check whether the remaining materials can be collected.' },
  { name: 'Old mattress', aliases: ['mattress'], category: 'Special collection', bin: 'Bulky waste collection', advice: 'Contact your local bulky-waste or reuse service.' },
  { name: 'Old furniture', aliases: ['chair', 'table', 'wooden furniture'], category: 'Special collection', bin: 'Reuse or bulky waste collection', advice: 'Donate usable furniture or arrange a bulky-waste collection.' },
  { name: 'Wood scraps', aliases: ['wood pieces', 'sawdust'], category: 'Special collection', bin: 'Wood or garden waste collection', advice: 'Separate treated or painted wood from untreated wood and check local collection rules.' },
  { name: 'Rubber tyre', aliases: ['old tyre', 'tire'], category: 'Special collection', bin: 'Tyre collection', advice: 'Return to a tyre dealer or authorised collection facility.' },
  { name: 'Cooking oil', aliases: ['used cooking oil', 'frying oil'], category: 'Special collection', bin: 'Used cooking oil collection', advice: 'Never pour it down the drain. Store it in a sealed container and use an appropriate collection service.' },
  { name: 'Hair', aliases: ['human hair'], category: 'Wet waste', bin: 'Organic waste collection', advice: 'Small amounts can go with organic waste where accepted.' }
]


 


function Footer() {
  return (
    <footer className="footer">

      <div className="brand">
        <span className="brand-icon">E</span>
        <span>
          Eco<span className="brand-dot">Pulse</span>
        </span>
      </div>

      <p>
        Small actions. <strong>Lasting impact.</strong>
      </p>

      <p>
        Building awareness for a cleaner,
        greener and more sustainable future.
      </p>

      <Link to="/waste-sorting" className="button button-primary">
        Explore Waste Sorting
      </Link>

      <p>
        © 2026 EcoPulse. All rights reserved.
      </p>

    </footer>
  )
}



// ========================
// MAIN APPLICATION
// ========================
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return null
}
<div className="nav-links">
  <SmoothLink to="/">Home</SmoothLink>
  <SmoothLink to="/challenge">Eco Challenge</SmoothLink>
  <SmoothLink to="/calculator">Carbon Calculator</SmoothLink>
  <SmoothLink to="/actions">Take Action</SmoothLink>
</div>
function WasteSorting() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [material, setMaterial] = useState('')
  const [showFallback, setShowFallback] = useState(false)

  const normalise = value =>
    value.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ')

  const results = search.trim()
    ? wasteItems.filter(item =>
        normalise(item.name).includes(normalise(search)) ||
        item.aliases.some(alias => normalise(alias).includes(normalise(search))) ||
        normalise(search).includes(normalise(item.name))
      )
    : []

  const materialGuidance = {
    food: ['Wet waste', 'Compost or wet waste collection', 'Food scraps can usually be composted. Keep them separate from packaging.'],
    paper: ['Dry recyclable', 'Paper recycling', 'Only clean, dry paper is generally recyclable. Greasy or contaminated paper may need general waste.'],
    plastic: ['Depends on plastic type', 'Check local plastic collection', 'Empty and clean it. Different plastics and multilayer packaging have different recycling options.'],
    metal: ['Dry recyclable', 'Metal recycling', 'Empty and clean metal items. Check local acceptance.'],
    glass: ['Dry recyclable', 'Glass recycling', 'Keep glass separate and handle broken pieces safely. Not all glass types are accepted.'],
    electronic: ['E-waste', 'Authorised e-waste collection', 'Keep electronics and batteries out of ordinary household bins.'],
    battery: ['Hazardous waste', 'Battery collection point', 'Keep batteries separate and use an authorised collection point.'],
    cloth: ['Reusable or special collection', 'Textile collection', 'Donate usable textiles or find a textile recycler for damaged items.'],
    sanitary: ['Sanitary waste', 'Wrapped sanitary waste', 'Wrap securely and follow local sanitary-waste instructions.'],
    chemical: ['Hazardous waste', 'Special collection', 'Keep in the original labelled container. Follow product and local disposal instructions.'],
    mixed: ['Needs checking', 'Ask your local waste collector', 'Composite items may contain several materials. Separate parts where safe and check local rules.']
  }

  return (
    <main className="inner-page waste-sorting-page">
      <div className="eyebrow"><span className="live-dot"></span>ECOPULSE WASTE GUIDE</div>
      <h1>Where does it <span>belong?</span></h1>
      <p className="calculator-intro">
        Search for an everyday item to discover how to sort it.
        Explore our collection or identify an unfamiliar item by its material.
      </p>

      <div className="waste-search">
        <span aria-hidden="true">⌕</span>
        <input
          value={search}
          onChange={e => {
            setSearch(e.target.value)
            setSelected(null)
            setShowFallback(false)
          }}
          placeholder="Search items, e.g. banana peel, battery, bottle..."
          aria-label="Search waste items"
        />
        {search && <button onClick={() => { setSearch(''); setSelected(null); setShowFallback(false) }}>Clear</button>}
      </div>

      {!search.trim() && (
        <div className="waste-category-list">
          {['Wet waste', 'Dry recyclable', 'E-waste', 'Hazardous waste', 'Sanitary waste', 'Special collection'].map(category => (
            <button key={category} onClick={() => setSearch(category === 'Dry recyclable' ? 'paper' : category === 'Special collection' ? 'old' : category === 'Wet waste' ? 'food' : category === 'E-waste' ? 'phone' : category === 'Hazardous waste' ? 'battery' : 'pad')}>
              {category}
            </button>
          ))}
        </div>
      )}

      {search.trim() && results.length > 0 && (
        
<div className="waste-results">
  <p className="waste-result-count">
    {results.length} matching item{results.length === 1 ? '' : 's'}
  </p>

  {results.map(item => (
    <button
      className="waste-result"
      key={item.name}
      onClick={() => {
        setSelected(item)
        setShowFallback(false)
      }}
    >
      <span>{item.name} →</span>
    </button>
  ))}
</div>

      )}

      {selected && (
        <section className="waste-answer">
          <p className="result-label">SORTING RESULT</p>
          <h2>{selected.name}</h2>
          <span className="waste-category-tag">{selected.category}</span>
          <h3>{selected.bin}</h3>
          <p>{selected.advice}</p>
        </section>
      )}

      {search.trim() && results.length === 0 && !showFallback && (
        <section className="waste-answer">
          <h2>Let's identify your item.</h2>
          <p>We can still help you sort it. What is it mainly made of?</p>
          <button className="primary-button" onClick={() => setShowFallback(true)}>Identify by material</button>
        </section>
      )}

      {showFallback && (
        <section className="waste-answer">
          <h2>What is it made of?</h2>
          <p>Select the closest material. If it contains several materials, choose mixed materials.</p>
          <select value={material} onChange={e => setMaterial(e.target.value)}>
            <option value="">Choose a material</option>
            <option value="food">Food or plant matter</option>
            <option value="paper">Paper or cardboard</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="glass">Glass</option>
            <option value="electronic">Electronic device</option>
            <option value="battery">Battery</option>
            <option value="cloth">Fabric or clothing</option>
            <option value="sanitary">Sanitary or hygiene waste</option>
            <option value="chemical">Chemical or paint</option>
            <option value="mixed">Mixed or unknown materials</option>
          </select>
          {material && (
            <div className="waste-guidance">
              <span className="waste-category-tag">{materialGuidance[material][0]}</span>
              <h3>{materialGuidance[material][1]}</h3>
              <p>{materialGuidance[material][2]}</p>
            </div>
          )}
        </section>
      )}

      <p className="waste-disclaimer">
        Sorting guidance is general. Local municipal rules and recycling facilities vary.
        Always follow your local waste collector's instructions, especially for hazardous items.
      </p>
      
    </main>
  )
}


function TemperatureGame() {
  const choices = [
    {
      title: 'Switch to renewable energy',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
      alt: 'Solar panels generating renewable energy',
      impact: -0.25,
      points: 20,
      explanation: 'Solar and wind energy can reduce emissions from electricity generation.'
    },
    {
      title: 'Protect forests',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85',
      alt: 'A lush green forest',
      impact: -0.20,
      points: 20,
      explanation: 'Forests absorb carbon dioxide and support biodiversity.'
    },
    {
      title: 'Improve energy efficiency',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
      alt: 'An energy-efficient modern building',
      impact: -0.15,
      points: 15,
      explanation: 'Using less energy reduces the demand for electricity.'
    },
    {
      title: 'Choose public transport',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85',
      alt: 'Public transport bus',
      impact: -0.10,
      points: 15,
      explanation: 'Public transport can reduce emissions per passenger.'
    },
    {
      title: 'Continue using fossil fuels',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85',
      alt: 'Industrial fossil fuel emissions',
      impact: 0.20,
      points: 0,
      explanation: 'Burning fossil fuels releases greenhouse gases.'
    },
    {
      title: 'Expand coal-powered plants',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85',
      alt: 'Industrial power station',
      impact: 0.25,
      points: 0,
      explanation: 'Coal is a heavy polluter, rapidly driving up atmospheric CO2 levels.'
    },
    {
      title: 'Increase single-use plastics production',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85',
      alt: 'Plastic waste',
      impact: 0.15,
      points: 0,
      explanation: 'Manufacturing and incinerating plastics releases massive amounts of carbon.'
    },
    {
      title: 'Subsidize industrial logging',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85',
      alt: 'A forest landscape',
      impact: 0.20,
      points: 0,
      explanation: 'Clearing massive forest tracts eliminates vital global carbon sinks.'
    }
  ]

  const [temperature, setTemperature] = useState(2.0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState([])
  const [finished, setFinished] = useState(false)

  function chooseAction(choice) {
    if (selected.includes(choice.title) || finished) return

    const newSelected = [...selected, choice.title]

    setSelected(newSelected)
    setScore(score + choice.points)

    setTemperature(current =>
      Math.max(
        1.0,
        Math.min(3.0, Number((current + choice.impact).toFixed(2)))
      )
    )

    if (newSelected.length === 4) {
      setFinished(true)
    }
  }

  function restartGame() {
    setTemperature(2.0)
    setScore(0)
    setSelected([])
    setFinished(false)
  }

  const progress = (selected.length / 4) * 100

  return (
    <main className="page-wrap temperature-game">

      <div className="page-header">
        <p className="eyebrow">ECOPULSE INTERACTIVE GAME</p>

        <h1>
          Temperature <em>Takedown.</em>
        </h1>

        <p className="lead">
          The planet needs your help! Make smart environmental
          decisions, reduce the game's temperature indicator
          and earn points.
        </p>
      </div>

      <section className="temperature-dashboard">

        <div className="temperature-top">
          <div>
            <p className="eyebrow">SIMULATED TEMPERATURE</p>

            <div className="temperature-number">
              {temperature.toFixed(2)}°C
            </div>

            <p className="temperature-caption">
              Lower game value = better result
            </p>
          </div>

          <div className="temperature-score">
            <span>YOUR SCORE</span>
            <strong>{score}</strong>
            <small>POINTS</small>
          </div>
        </div>

        <div className="temperature-bar">
          <div
            className="temperature-bar-fill"
            style={{
              width: `${((temperature - 1) / 2) * 100}%`
            }}
          />
        </div>

        <div className="temperature-labels">
          <span>1.0°C</span>
          <span>3.0°C</span>
        </div>

        <div className="game-progress">
          <div className="game-progress-heading">
            <strong>Your progress</strong>
            <span>{selected.length}/4 decisions</span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </section>

      {!finished ? (
        <section className="temperature-choices">

          <h2>Make your next decision</h2>

          <p className="choice-intro">
            Choose an action that could influence the climate.
          </p>

          <div className="temperature-choice-grid">

            {choices.map(choice => (
              <button
                key={choice.title}
                className={`temperature-choice ${
                  selected.includes(choice.title) ? 'selected-choice' : ''
                }`}
                disabled={selected.includes(choice.title)}
                onClick={() => chooseAction(choice)}
              >

                <img
                  className="temperature-choice-image"
                  src={choice.image}
                  alt={choice.alt}
                  loading="lazy"
                />

                <span className="choice-points">
                  +{choice.points} POINTS
                </span>

                <h3>{choice.title}</h3>

                <p>{choice.explanation}</p>

                {selected.includes(choice.title) && (
                  <span className="choice-selected">
                    SELECTED
                  </span>
                )}

              </button>
            ))}

          </div>

        </section>
      ) : (

        <section className="temperature-result">

          <p className="eyebrow">GAME COMPLETED</p>

          <h2>Well played!</h2>

          <p>
            You completed all four decisions and earned {score} points.
            Your final simulated temperature indicator is
            {' '}{temperature.toFixed(2)}°C.
          </p>

          <button
            className="button button-primary"
            onClick={restartGame}
          >
            Play Again
          </button>

        </section>

      )}

      <p className="temperature-disclaimer">
        This is an educational simulation. Its temperature values
        and points are invented game mechanics, not real climate
        measurements or predictions. Actual global warming depends
        on many interacting factors.
      </p>

    </main>
  )
}



function ClimateImpact() {
  const events = [
    {
      year: "2024",
      location: "India",
      title: "Severe Heatwaves",
      category: "EXTREME HEAT",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
      alt: "Sunlight over a dry, hot landscape",
      description:
        "Several parts of India experienced intense and prolonged heatwaves. The World Meteorological Organization reported more than 450 heat-related deaths across the country.",
      impact:
        "Extreme heat puts people's health at risk, affects outdoor workers, and increases pressure on water and electricity supplies.",
      climate:
        "Asia is warming nearly twice as fast as the global average. Human-caused global warming increases the likelihood and intensity of extreme heat.",
      source: "https://wmo.int/publication-series/state-of-climate-asia-2024"
    },
    {
      year: "2023",
      location: "Canada",
      title: "Record-Breaking Wildfires",
      category: "FOREST FIRES",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",
      alt: "A dense forest landscape",
      description:
        "Canada experienced its largest recorded wildfire season. Around 14.6 million hectares of forest burned.",
      impact:
        "More than 230,000 people were evacuated. Smoke from the fires also affected air quality over large areas.",
      climate:
        "Hotter and drier conditions linked to climate change can make wildfire seasons longer and fires more intense. Climate change is not the only cause of individual fires.",
      source: "https://natural-resources.canada.ca/forests-forestry/wildland-fires/forest-fires"
    },
    {
      year: "2024",
      location: "Australia",
      title: "Great Barrier Reef Bleaching",
      category: "OCEAN WARMING",
      image:
        "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=85",
      alt: "Underwater coral reef and marine life",
      description:
        "The Great Barrier Reef experienced its fifth mass coral bleaching event. High ocean temperatures caused widespread heat stress across the reef.",
      impact:
        "Bleaching makes corals vulnerable. If stressful conditions continue, corals can die, affecting marine life that depends on the reef.",
      climate:
        "Rising ocean temperatures caused by global warming increase the risk of mass coral bleaching.",
      source: "https://www.aims.gov.au/research-topics/environmental-issues/coral-bleaching/coral-bleaching-events"
    }
  ];

  return (
    <main className="inner-page climate-impact-page">
      <section className="climate-impact-hero">
        <p className="climate-eyebrow">THE REALITY OF CLIMATE CHANGE</p>
        <h1>Climate Impact</h1>
        <p>
          These are real events from around the world. Climate change is not
          just a future possibility — its effects are already being experienced.
        </p>
      </section>

      <section className="climate-events">
        <div className="climate-section-heading">
          <p className="climate-eyebrow">REAL EVENTS. REAL CONSEQUENCES.</p>
          <h2>What Has Happened?</h2>
          <p>
            Explore some major events and understand the connection
            between them and our changing climate.
          </p>
        </div>

        <div className="climate-event-grid">
          {events.map((event) => (
            <article className="climate-event-card" key={event.title}>
              <img
                className="climate-event-image"
                src={event.image}
                alt={event.alt}
                loading="lazy"
              />

              <div className="climate-event-top">
                <span className="climate-category">{event.category}</span>
                <span className="climate-year">{event.year}</span>
              </div>

              <p className="climate-location">{event.location}</p>
              <h3>{event.title}</h3>

              <div className="climate-detail">
                <h4>What happened?</h4>
                <p>{event.description}</p>
              </div>

              <div className="climate-detail">
                <h4>What was the impact?</h4>
                <p>{event.impact}</p>
              </div>

              <div className="climate-detail climate-connection">
                <h4>How is climate change connected?</h4>
                <p>{event.climate}</p>
              </div>

              <a
                className="climate-source"
                href={event.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the official source →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="climate-impact-message">
        <p className="climate-eyebrow">WHY IT MATTERS</p>
        <h2>These Events Are a Warning.</h2>
        <p>
          Every heatwave, wildfire, and bleaching event reminds us that
          protecting the climate means protecting people, wildlife, and
          the ecosystems we depend on.
        </p>
      </section>
    </main>
  );
}



  function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <NatureSoundControl />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/waste-sorting" element={<WasteSorting />} />
        <Route path="/climate-impact" element={<ClimateImpact />} />
        <Route path="/temperature-game" element={<TemperatureGame />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
