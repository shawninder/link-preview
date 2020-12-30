# Facebook event link preview generator

Generates link previews as HTML for a list of space-separated URLs for Facebook events.

```sh
$ node bin/preview https://www.facebook.com/events/828492354390531/ https://www.facebook.com/events/380694086566350

<div class="linkPreview">
  <img src="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.0-0/c80.0.206.206a/p206x206/131922475_1025635874617616_6603698042039959070_o.jpg?_nc_cat=106&ccb=2&_nc_sid=b386c4&_nc_ohc=yX-FVl2WYgYAX9X999d&_nc_ht=scontent.fymq3-1.fna&tp=27&oh=f38a1b625d489513bdb2b6c8d68789fc&oe=600B86AC" />
  <strong><a href="https://www.facebook.com/events/d41d8cd9/our-stories-indigenous-book-club-january-author-talk-bug/828492354390531/">Our Stories: Indigenous Book Club - January author talk, ‘bug’</a></strong>
  <p>NAC Indigenous Theatre and the Ottawa Public Library have started a book club, and you’re invited to join in! Our Stories: Indigenous Book Club will run from January - June 2021, with monthly books including poetry, fiction, memoirs and plays. At the end of each month, join us for an online conver…</p>
  <em>2021-01-27T16:00:00-0800</em>
</div>


<div class="linkPreview">
  <img src="https://scontent.fymq3-1.fna.fbcdn.net/v/t1.0-0/c94.0.206.206a/p206x206/131046900_2838253653165256_3076523757167232461_o.jpg?_nc_cat=102&ccb=2&_nc_sid=b386c4&_nc_ohc=qR2hLVJwcVIAX9-oouA&_nc_ht=scontent.fymq3-1.fna&tp=27&oh=e78039994385b4fcfa299097bbd8cce3&oe=600B09F9" />
  <strong><a href="https://www.facebook.com/events/en-ligne/f%C3%AAte-des-semences-de-montr%C3%A9al-montreal-seed-festival/380694086566350/">Fête des semences de Montréal // Montreal Seed Festival</a></strong>
  <p>*English below* - Liste des exposant.e.s ci-bas @[115320574704:274:Espace pour la vie] et @[1390118081312161:274:Cultiver Montréal] sont fiers de présenter la 21e édition de la Fête des semences, qui aura lieu exceptionnellement, en ligne. Démarrez la planification de votre saison de jardinage dès …</p>
  <em>2021-02-03T19:00:00-0500</em>
</div>

```

All you need now is a bit of css. Have a look at [these example styles](style.css)
