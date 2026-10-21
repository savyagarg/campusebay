const listings = [
  {title:'iPad 9th Gen',price:'₹22,000',seller:'Riya · PGP 2024',category:'Electronics',icon:'▣',color:'purple'},
  {title:'The Lean Startup',price:'₹350',seller:'Kabir · PGP 2025',category:'Books',icon:'▤',color:'yellow'},
  {title:'IKEA Study Lamp',price:'₹700',seller:'Meera · PGP 2025',category:'Furniture',icon:'◒',color:'blue'},
  {title:'Nike Air Max · Size 9',price:'₹3,200',seller:'Dev · PGP 2024',category:'Fashion',icon:'⌁',color:'orange'},
  {title:'Casio Scientific Calculator',price:'₹550',seller:'Ananya · PGP 2025',category:'Electronics',icon:'▦',color:'yellow'},
  {title:'Mini Bookshelf',price:'₹1,000',seller:'Sarthak · PGP 2024',category:'Furniture',icon:'▥',color:'blue'},
  {title:'Marketing Case Notes',price:'₹250',seller:'Ishita · PGP 2025',category:'Books',icon:'▤',color:'purple'},
  {title:'Denim Jacket · Size M',price:'₹900',seller:'Nikhil · PGP 2024',category:'Fashion',icon:'◇',color:'orange'}
];
const grid=document.querySelector('#listing-grid'), toast=document.querySelector('#toast');
function renderListings(items=listings){grid.innerHTML=items.length?items.map(x=>`<article class="listing-card" data-title="${x.title}"><div class="product-img ${x.color}">${x.icon}</div><div class="listing-info"><h3>${x.title}</h3><div class="price">${x.price}</div><div class="meta"><span>${x.seller}</span><span>♡</span></div></div></article>`).join(''):`<div class="empty-state" style="grid-column:1/-1;padding:45px"><h2>No listings found</h2><p>Try another search or category.</p></div>`}
renderListings();
function showView(view){document.querySelectorAll('.view').forEach(x=>x.classList.remove('active-view'));document.querySelector(`#${view}-view`).classList.add('active-view');document.querySelectorAll('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===view));window.scrollTo({top:0,behavior:'smooth'})}
document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view)));
document.querySelectorAll('.category').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.category').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.category;renderListings(cat==='All'?listings:listings.filter(x=>x.category===cat))}));
document.querySelector('#search-input').addEventListener('input',e=>{const q=e.target.value.toLowerCase();renderListings(listings.filter(x=>`${x.title} ${x.category}`.toLowerCase().includes(q)))});
document.querySelector('#sell-form').addEventListener('submit',e=>{e.preventDefault();e.target.reset();toast.textContent='Your listing is ready to go live!';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200)});
grid.addEventListener('click',e=>{const card=e.target.closest('.listing-card');if(!card)return;toast.textContent=`${card.dataset.title} saved to your shortlist`;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)});
