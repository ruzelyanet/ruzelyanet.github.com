<?php
	if(isset($_POST['q'])) {
	    header("Content-type: text/txt; charset=UTF-8");
	    if($_POST['q']=='1') {
	        echo '

<h3>Bold and Italics</h3>
<p>The following snippet of text is <strong>rendered as bold text</strong>.</p></p>
<hr>
<h3>Abbreviations</h3>
<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
<hr>
<h3>Addresses</h3>
<address>
    <strong>Twitter, Inc.</strong><br>
    795 Folsom Ave, Suite 600<br>
    San Francisco, CA 94107<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
</address>
<hr>
<h3>Blockquotes</h3>
<blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>

<h3>Lists</h3>
<h4>Unordered</h4>
<ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
        <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
        </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ul>
<h4>Ordered</h4>
<ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit</li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
</ol>
<hr>
<h3>Code and Pre</h3>
<pre>@mixin get-all-retina-images($images) {
    @media
       only screen and (-webkit-min-device-pixel-ratio: 2),
       only screen and (-moz-min-device-pixel-ratio: 2),
       only screen and (-o-min-device-pixel-ratio: 2/1),
       only screen and (min-device-pixel-ratio: 2) {
          @include get-sprite-retina-images($images);
    }
  }</pre>
<hr>
<h3>Table</h3>
<table>
    <thead>
    <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
    </tr>
    </tbody>
</table>';
		}
	    
	    else {
	        echo 'error';
	    }
	}
	
?>