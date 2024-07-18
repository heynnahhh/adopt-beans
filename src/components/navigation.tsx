const navList = [
    {'name': 'Home', 'href': '#'},
    {'name': 'Adopt a Pal', 'href': '#'},
    {'name': 'Bulletin Board', 'href': '#'},
    {'name': 'About', 'href': '#'},
    {'name': 'FAQs', 'href': '#'},
    {'name': 'Get in touch', 'href': '#'},
];

export default function Navigation(){
    return (
            <div className="lg:flex lg:gap-x-12">
                {navList.map((v,k) => 
                    <a key={k} href={v.href}>{v.name}</a>
                )}
            </div>
    )
}