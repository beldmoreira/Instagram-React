

export default function Story (){
    let info = {image: 'assets/image/9gag.svg', user: '9gag'},
    {image: 'assets/image/meowed.svg', user: 'meowed'},
    {image: 'assets/image/barked.svg', user: 'barked'},
    {image: 'assets/image/nathanwpylestrangeplanet.svg', user: 'nathanwpylestrangeplanet'},
    {image: 'assets/image/wawawicomics.svg', user: 'wawawicomics'},
    {image: 'assets/image/respondeai.svg', user:'respondeai'},
    {image: 'assets/image/filomoderna.svg', user: 'filomoderna'},
    {image: 'assets/image/memeriagourmet.svg', user: 'memeriagourmet'}
    return(
        <div class="stories">
        {story.map(info => <Story image={info.image} user={info.user}/>)}
        </div>
);
} 
