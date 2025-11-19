# Design Guidelines: Multi-Page Podcast Website

## Design Approach
**Reference-Based:** Drawing inspiration from modern podcast platforms (Spotify's content showcases, NPR's editorial layouts) combined with Apple Podcasts' clean presentation. This creates an engaging, content-forward experience that balances visual appeal with information accessibility.

## Core Design Principles
- **Content Hierarchy:** Audio content and host personalities take center stage
- **Visual Storytelling:** Use imagery to create emotional connection with listeners
- **Scannable Layouts:** Easy navigation between episodes and host information
- **Trust Building:** Professional design that establishes credibility

## Typography System
**Font Stack:**
- Primary: 'Inter' (headings, UI elements) - Modern, highly legible
- Secondary: 'Merriweather' (body text, descriptions) - Excellent readability for longer content

**Scale:**
- Hero Headlines: text-5xl to text-7xl (bold/extrabold)
- Section Headers: text-3xl to text-4xl (semibold)
- Subsections: text-xl to text-2xl (medium)
- Body Text: text-base to text-lg (regular)
- Captions/Meta: text-sm (regular)

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component spacing: p-6, p-8
- Section padding: py-16, py-20, py-24
- Element gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Full-width sections: w-full with max-w-7xl inner containers
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl

## Page-Specific Layouts

### Home Page
**Hero Section (80vh):**
- Large hero image: Podcast cover art or hosts in recording studio (warm, inviting photography)
- Centered content overlay with blurred background buttons
- Primary CTA: "Listen Now" + Secondary: "Browse Episodes"

**Featured Episodes (3-column grid on desktop):**
- Episode cards with thumbnail images
- Title, date, duration, short description
- Play button overlay on hover

**Host Highlights (2-column):**
- Large circular host photos
- Name, role, brief bio snippet
- Link to full host profiles

**Latest Episode Showcase:**
- Full-width featured section
- Waveform visualization or episode artwork
- Embedded player interface

**Newsletter/CTA Section:**
- Centered layout with supporting imagery
- Email capture form
- Social proof ("Join 10,000+ listeners")

### About Us Page
**Hero (60vh):**
- Team photo or podcast studio imagery
- Mission statement overlay

**Story Section:**
- Single-column narrative (max-w-4xl)
- Interspersed with lifestyle imagery
- Pull quotes or key statistics highlighted

**Values/Mission (3-card layout):**
- Icon + heading + description format
- Equal-height cards with subtle borders

**Team Grid (if applicable):**
- 3-4 column grid of contributors
- Photos with name/role overlays

### Hosts Page
**Hero (50vh):**
- Montage of all hosts or creative group shot
- "Meet Your Hosts" headline

**Host Profiles (Alternating 2-column):**
- Large portrait photos (alternating left/right)
- Bio, expertise, social links
- Episode highlights or guest appearances
- 6-8 units vertical spacing between profiles

**Fun Facts/Behind the Scenes:**
- Casual photography showcasing personality
- Quote cards or audio snippets

### Contact Page
**Split Layout (2-column on desktop):**
- Left: Contact form (name, email, subject, message)
- Right: Contact info, office hours, social media, location map placeholder

**Form Design:**
- Clear labels above inputs
- Generous input field sizing (p-4)
- Prominent submit button

**Additional Trust Elements:**
- Response time expectations
- Alternative contact methods
- Privacy assurance statement

## Component Library

**Navigation:**
- Horizontal desktop (flex layout), hamburger mobile
- Logo left, links center/right
- Sticky on scroll with subtle shadow
- Active page indicator (underline or background)

**Cards:**
- Rounded corners (rounded-lg)
- Subtle shadow on hover
- Consistent padding (p-6)
- Image-first design with text overlay or below

**Buttons:**
- Primary: Bold, full rounded (rounded-full), px-8 py-4
- Secondary: Outlined variant
- Blurred backgrounds when on images (backdrop-blur-sm, bg-white/20)

**Footer:**
- 3-4 column grid on desktop (Links, About, Connect, Newsletter)
- Copyright and legal links at bottom
- Social media icons
- Reduced opacity for subtle presence

## Images
**Required Images:**
- Home Hero: Professional podcast recording studio or hosts at microphones (1920x1080)
- Episode Thumbnails: Custom artwork per episode (600x600)
- Host Portraits: Professional headshots (800x800, circular crop)
- About Page: Team photo or candid studio shots (1600x900)
- Background Elements: Subtle texture or gradient overlays for depth

**Image Treatment:**
- Subtle overlays for text legibility
- Consistent aspect ratios within sections
- Lazy loading for performance

## Responsive Behavior
**Breakpoints:**
- Mobile: Single column, stacked navigation
- Tablet (md): 2-column grids, horizontal nav
- Desktop (lg+): 3-4 column grids, full layouts

**Key Adaptations:**
- Hero heights reduce on mobile (60vh → 50vh)
- Navigation collapses to hamburger below md
- Multi-column grids stack to single column on mobile
- Padding scales down (py-20 → py-12 on mobile)

## Interactions
**Minimal Animation:**
- Subtle hover states on cards (slight lift, shadow increase)
- Smooth page transitions on navigation
- Form field focus states
- NO scroll animations, parallax, or complex effects

---

**Design Philosophy:** Create a warm, inviting digital space that mirrors the intimacy of podcast listening while maintaining professional credibility. Every element should serve the dual purpose of showcasing content and building listener connection.