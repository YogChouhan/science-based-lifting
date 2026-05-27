const machineDatabase = [
    {
        id: 1,
        name: "Incline Barbell Press",
        muscle: "Upper Pectoralis Major",
        desc: "Optimal for targeting the clavicular head of the pectoralis. The 30-degree incline provides an excellent activation curve without over-engaging the anterior deltoids.",
        steps: ["Adjust bench to exactly 30 degrees.", "Retract scapula and drive feet firmly into the floor.", "Control the eccentric (downward) phase for a 3-second count.", "Press upward and contract the pectoral muscles."],
        img: "https://cdn.shopify.com/s/files/1/0567/9300/6277/files/Incline_Bench_Press_24ecf46a-6f1d-48fd-aaa1-8f6f1f6d667e_480x480.jpg?v=1720707248",
        video: "https://www.youtube.com/watch?v=SrqOu55lrYU"
    },
    {
        id: 2,
        name: "Seated Cable Row",
        muscle: "Latissimus Dorsi & Rhomboids",
        desc: "A foundational horizontal pull for mid-back thickness. Utilizing a neutral grip ensures the shoulder joint remains in a biomechanically safe position.",
        steps: ["Maintain a slight bend in the knees for stability.", "Lean forward slightly to achieve a full stretch in the lats.", "Pull the handle toward the lower abdomen.", "Maintain a rigid torso; avoid using momentum to pull."],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5d0S1riNLQQsfh1NDpbl7YSXcRoG_HKyl4w&s",
        video: "https://www.youtube.com/watch?v=NYok5zjbDcw"
    },
    {
        id: 3,
        name: "Hack Squat",
        muscle: "Quadriceps Femoris",
        desc: "Provides maximum external stability for the spine. This allows the user to safely push the quadriceps closer to mechanical failure compared to unsupported variations.",
        steps: ["Position feet shoulder-width apart on the platform.", "Ensure the lower back remains flush against the pad.", "Descend smoothly until the knee joint breaks 90 degrees.", "Drive forcefully through the mid-foot to ascend."],
        img: "https://cdn.shopify.com/s/files/1/0566/4610/7219/files/1_84dcfae7-d21f-47e0-b387-a2819d935c6b.png?v=1759932507",
        video: "https://www.youtube.com/watch?v=0tn5K9NlCfo"
    },
    {
        id: 4,
        name: "Romanian Deadlift (RDL)",
        muscle: "Hamstrings & Gluteus Maximus",
        desc: "A hip-hinge movement critical for posterior chain development. Emphasizes the lengthening phase of the hamstrings under load.",
        steps: ["Hold the barbell with a shoulder-width grip.", "Keep legs mostly straight with a slight, locked bend in the knees.", "Push hips backward horizontally until a stretch is felt.", "Drive hips forward to return to the starting position."],
        img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        video: "https://www.youtube.com/watch?v=4usyq_IHdkg"
    },
    {
        id: 5,
        name: "Overhead Dumbbell Press",
        muscle: "Anterior Deltoids",
        desc: "A primary compound movement for shoulder development. Performing this seated provides back support, allowing for greater force production.",
        steps: ["Set bench to a 90-degree or slightly inclined angle.", "Keep elbows slightly tucked in front of the body.", "Press dumbbells overhead until arms are fully extended.", "Lower under control to ear level."],
        img: "https://t3.ftcdn.net/jpg/06/89/76/32/360_F_689763260_Q351ps7LAc6e6ehY38jkG9dd32Lu5EV1.jpg",
        video: "https://www.youtube.com/watch?v=M2rwvNhTOu0"
    },
    {
        id: 6,
        name: "Leg Extension",
        muscle: "Quadriceps (Isolation)",
        desc: "The only movement that fully isolates the rectus femoris. Best utilized at the end of a session for high-rep metabolic stress.",
        steps: ["Align the knee joint with the machine's pivot point.", "Adjust the ankle pad to rest on the lower shin.", "Extend legs forcefully, pausing briefly at the top.", "Lower the weight slowly to maintain tension."],
        img: "https://fitandwoke.com/wp-content/uploads/2024/04/Seated-Leg-Extension-featured.webp",
        video: "https://www.youtube.com/watch?v=4ZDm5EbiFI8"
    },
    {
        id: 7,
        name: "Cable Tricep Pushdown",
        muscle: "Triceps Brachii",
        desc: "An isolation movement targeting all three heads of the triceps. Using a cable ensures constant tension throughout the entire range of motion.",
        steps: ["Attach a rope or straight bar to a high cable pulley.", "Pin elbows firmly to your sides.", "Push the weight downward until arms are fully locked.", "Squeeze the triceps at the bottom before returning."],
        img: "https://t4.ftcdn.net/jpg/18/89/36/41/360_F_1889364157_3avrn0lvsID35MrP67mGtcDep2VYiDZJ.jpg",
        video: "https://www.youtube.com/watch?v=6Fzep104f0s"
    },
    {
        id: 8,
        name: "EZ-Bar Preacher Curl",
        muscle: "Biceps Brachii",
        desc: "Locks the humerus in place to prevent momentum, isolating the biceps. The angle of the pad emphasizes the short head of the muscle.",
        steps: ["Adjust the seat so your armpits rest firmly on the pad.", "Grip the EZ-bar on the inner angled grips.", "Curl the weight upward, fully contracting the biceps.", "Lower the bar slowly, stopping just before full lockout to protect the tendon."],
        img: "https://www.endomondo.com/wp-content/uploads/2024/07/ez-bar-preacher-curl.jpg",
        video: "https://www.youtube.com/watch?v=sxA__DoLsgo"
    }
];

const shopInventory = [
    { id: 101, name: "Premium Lifting Belt", price: 1499, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQh-PiF9TPHzYwCVUH4ftCCzf6jWxUpEmG0nB1lCuuyQc8Wg7gxSZ_SBWIRhUPmvhNCkhUTalNDawL-7Ce9IaPpt5IT5F3WE33XeBBv9ldf0ZCVcKloaDw41A" },
    { id: 102, name: "Figure 8 Straps", price: 599, img: "https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 103, name: "Chalk Block", price: 299, img: "https://www.ragefitness.com/cdn/shop/products/chalk3_f3058276-ea38-40d4-a490-a789989a0568.jpg?v=1691473498&width=1445" },
    { id: 104, name: "Knee Sleeves (Pair)", price: 1899, img: "https://m.media-amazon.com/images/I/81cW1uvfRUL.jpg" }
];

// --- MAIN PAGE RENDERING & SEARCH ---
const machineGrid = document.getElementById('machine-grid');
const shopGrid = document.getElementById('shop-grid');
const searchBar = document.getElementById('search-bar');

function renderMachines(dataToRender) {
    if(!machineGrid) return;
    machineGrid.innerHTML = ""; 
    
    if(dataToRender.length === 0) {
        machineGrid.innerHTML = "<p style='color:var(--text-muted); grid-column: 1 / -1;'>No exercises found matching your search.</p>";
        return;
    }

    dataToRender.forEach(machine => {
        // Fallback image functionality added directly to the img tag
        const safeName = machine.name.replace(/ /g, '+');
        machineGrid.innerHTML += `
            <div class="card" onclick="viewMachine(${machine.id})">
                <img src="${machine.img}" alt="${machine.name}" class="card-img" onerror="this.src='https://placehold.co/400x300/171717/eab308?text=${safeName}'">
                <div class="card-content">
                    <h3>${machine.name}</h3>
                    <p>TARGET: ${machine.muscle}</p>
                </div>
            </div>
        `;
    });
}

// Run on page load
if (machineGrid) {
    renderMachines(machineDatabase); 
    
    // Search Logic Event Listener
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredMachines = machineDatabase.filter(m => 
                m.name.toLowerCase().includes(searchTerm) || 
                m.muscle.toLowerCase().includes(searchTerm)
            );
            renderMachines(filteredMachines);
        });
    }

    // Render Shop with Fail-safe images
    if (shopGrid) {
        shopInventory.forEach(item => {
            const safeName = item.name.replace(/ /g, '+');
            shopGrid.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="${item.name}" class="card-img" onerror="this.src='https://placehold.co/400x300/171717/eab308?text=${safeName}'">
                    <div class="card-content">
                        <h3>${item.name}</h3>
                        <p class="accent-text" style="font-weight:bold; font-size:1.2rem;">₹${item.price}</p>
                        <button class="btn-outline" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, event)">ADD TO BAG</button>
                    </div>
                </div>
            `;
        });
    }
}

function viewMachine(id) {
    localStorage.setItem('activeMachineID', id);
    window.location.href = '/machine';
}

// --- DETAIL PAGE LOGIC ---
if (document.getElementById('detail-title')) {
    const savedID = localStorage.getItem('activeMachineID');
    const machine = machineDatabase.find(m => m.id == savedID);

    if (machine) {
        document.getElementById('detail-title').innerText = machine.name;
        document.getElementById('detail-muscle').innerText = machine.muscle;
        document.getElementById('detail-desc').innerText = machine.desc;
        document.getElementById('detail-img').src = machine.img;
        
        // Load the video source into the iframe's data attribute (so it doesn't autoplay until clicked)
        document.getElementById('detail-video').setAttribute('data-src', machine.video);

        const stepsContainer = document.getElementById('detail-steps');
        machine.steps.forEach(step => {
            const li = document.createElement('li');
            li.innerText = step;
            stepsContainer.appendChild(li);
        });
    } else {
        document.getElementById('detail-title').innerText = "MACHINE NOT FOUND";
        document.getElementById('detail-muscle').innerText = "N/A";
        document.getElementById('detail-desc').innerText = "Please return to the database and select an exercise to view its details.";
        document.querySelector('.play-button').style.display = 'none';
    }
}

// --- VIDEO PLAYER FUNCTIONALITY ---
function playVideo() {
    const img = document.getElementById('detail-img');
    const btn = document.querySelector('.play-button');
    const iframe = document.getElementById('detail-video');
    
    if(iframe && iframe.getAttribute('data-src')) {
        // Hide image and button
        img.style.display = 'none';
        btn.style.display = 'none';
        
        // Show iframe and trigger video load
        iframe.style.display = 'block';
        iframe.src = iframe.getAttribute('data-src');
    }
}

// --- FULLY FUNCTIONAL CART LOGIC ---
let cart = JSON.parse(localStorage.getItem('sbl_cart')) || [];

function addToCart(id, name, price, event) {
    cart.push({ id, name, price });
    localStorage.setItem('sbl_cart', JSON.stringify(cart));
    updateCartDisplay();
    
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "ACQUIRED ✓";
    btn.style.background = "var(--accent)";
    btn.style.color = "#000";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "transparent";
        btn.style.color = "var(--accent)";
    }, 1200);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('sbl_cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const countDisplay = document.getElementById('cart-count');
    if(countDisplay) countDisplay.innerText = cart.length;

    const container = document.getElementById('cart-items-container');
    const totalDisplay = document.getElementById('cart-total-price');
    
    if(container && totalDisplay) {
        container.innerHTML = "";
        let total = 0;

        if(cart.length === 0) {
            container.innerHTML = "<p style='color:var(--text-muted); text-align:center;'>Your bag is empty.</p>";
        } else {
            cart.forEach((item, index) => {
                total += item.price;
                container.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>₹${item.price}</p>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `;
            });
        }
        totalDisplay.innerText = `₹${total}`;
    }
}

function toggleCart() {
    const overlay = document.getElementById('cart-overlay');
    if(overlay) {
        overlay.classList.toggle('active');
        if(overlay.classList.contains('active')) {
            updateCartDisplay();
        }
    }
}

function checkout() {
    if(cart.length === 0) {
        alert("Your bag is empty.");
        return;
    }
    alert(`Checkout initiated for ₹${cart.reduce((a, b) => a + b.price, 0)}. \n\n(Transaction complete - Cart cleared)`);
    cart = []; 
    localStorage.setItem('sbl_cart', JSON.stringify(cart));
    updateCartDisplay();
    toggleCart(); 
}

updateCartDisplay();