// SVG illustrations for DIY activities — simple, clear, colourful

const illustrations = {
  vision_cards: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* Parent holding card */}
      <circle cx="50" cy="45" r="18" fill="#F5C2A0"/>
      <rect x="32" y="63" width="36" height="40" rx="8" fill="#A78BCA"/>
      {/* Arms holding card */}
      <line x1="50" y1="80" x2="90" y2="72" stroke="#F5C2A0" strokeWidth="8" strokeLinecap="round"/>
      {/* B&W card */}
      <rect x="90" y="52" width="50" height="40" rx="4" fill="white" stroke="#3A2E3F" strokeWidth="2"/>
      <rect x="90" y="52" width="25" height="20" fill="#3A2E3F" rx="2"/>
      <rect x="115" y="72" width="25" height="20" fill="#3A2E3F" rx="2"/>
      <rect x="90" y="72" width="25" height="20" fill="white"/>
      <rect x="115" y="52" width="25" height="20" fill="white"/>
      {/* Baby */}
      <ellipse cx="160" cy="95" rx="28" ry="20" fill="#FFD5C2"/>
      <circle cx="160" cy="75" r="16" fill="#F5C2A0"/>
      <circle cx="155" cy="73" r="3" fill="#3A2E3F"/>
      <circle cx="165" cy="73" r="3" fill="#3A2E3F"/>
      {/* Distance arrow */}
      <line x1="148" y1="110" x2="92" y2="110" stroke="#A78BCA" strokeWidth="2" strokeDasharray="3"/>
      <text x="115" y="125" textAnchor="middle" fontSize="9" fill="#6B5F70">20–30 cm</text>
    </svg>
  ),

  tummy_time: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F0F8F4" rx="12"/>
      {/* Floor mat */}
      <rect x="10" y="90" width="180" height="20" rx="6" fill="#C8E6D0"/>
      {/* Rolled towel under chest */}
      <ellipse cx="100" cy="90" rx="30" ry="8" fill="#7BC88F"/>
      {/* Baby on tummy */}
      <ellipse cx="100" cy="82" rx="45" ry="16" fill="#FFD5C2"/>
      {/* Baby head lifted */}
      <circle cx="145" cy="70" r="16" fill="#F5C2A0"/>
      <circle cx="140" cy="68" r="3" fill="#3A2E3F"/>
      <circle cx="150" cy="68" r="3" fill="#3A2E3F"/>
      <path d="M 138 75 Q 145 79 152 75" stroke="#E88A93" strokeWidth="2" fill="none"/>
      {/* Arms on floor */}
      <path d="M 130 85 Q 118 95 105 90" stroke="#F5C2A0" strokeWidth="9" strokeLinecap="round" fill="none"/>
      {/* Mirror */}
      <rect x="155" y="60" width="30" height="38" rx="4" fill="white" stroke="#A78BCA" strokeWidth="2"/>
      <ellipse cx="170" cy="79" rx="11" ry="13" fill="#D5C8E8"/>
      <image href="/images/emojis/1fa9e.png" x="164.4" y="73.48" width="11.2" height="11.2" />
      {/* Arrow up = head lift */}
      <path d="M 145 55 L 145 45" stroke="#7BC88F" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="145" y="40" textAnchor="middle" fontSize="8" fill="#7BC88F">Head up!</text>
    </svg>
  ),

  skin_to_skin: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF0F5" rx="12"/>
      {/* Chair */}
      <rect x="30" y="60" width="140" height="70" rx="8" fill="#F5C2C7"/>
      <rect x="20" y="50" width="20" height="80" rx="6" fill="#E88A93"/>
      <rect x="160" y="50" width="20" height="80" rx="6" fill="#E88A93"/>
      {/* Parent torso */}
      <rect x="65" y="45" width="70" height="80" rx="20" fill="#F5C2A0"/>
      {/* Parent head */}
      <circle cx="100" cy="32" r="20" fill="#F5C2A0"/>
      {/* Baby on chest */}
      <ellipse cx="100" cy="78" rx="22" ry="16" fill="#FFD5C2"/>
      <circle cx="100" cy="62" r="12" fill="#F5C2A0"/>
      {/* Warmth lines */}
      <path d="M 75 75 Q 68 65 75 55" stroke="#E88A93" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M 125 75 Q 132 65 125 55" stroke="#E88A93" strokeWidth="1.5" fill="none" opacity="0.5"/>
      {/* Heart */}
      <image href="/images/emojis/two-hearts.png" x="88.8" y="80.96000000000001" width="22.4" height="22.4" />
    </svg>
  ),

  massage: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F5F0FF" rx="12"/>
      {/* Mat */}
      <rect x="20" y="70" width="160" height="12" rx="6" fill="#D5C8E8"/>
      {/* Baby lying on back */}
      <ellipse cx="100" cy="68" rx="55" ry="20" fill="#FFD5C2"/>
      {/* Baby head */}
      <circle cx="150" cy="60" r="16" fill="#F5C2A0"/>
      <circle cx="145" cy="58" r="3" fill="#3A2E3F"/>
      <circle cx="155" cy="58" r="3" fill="#3A2E3F"/>
      <path d="M 143 65 Q 150 69 157 65" stroke="#E88A93" strokeWidth="2" fill="none"/>
      {/* Hands massaging legs */}
      <ellipse cx="55" cy="72" rx="12" ry="8" fill="#D5C8E8" opacity="0.8"/>
      <ellipse cx="75" cy="72" rx="12" ry="8" fill="#D5C8E8" opacity="0.8"/>
      {/* Oil drop */}
      <path d="M 30 30 Q 30 20 35 15 Q 40 20 40 30 Q 40 38 35 38 Q 30 38 30 30Z" fill="#F5E6A3"/>
      <text x="35" y="50" textAnchor="middle" fontSize="8" fill="#6B5F70">Oil</text>
      {/* Motion arrows */}
      <path d="M 52 65 L 52 55" stroke="#A78BCA" strokeWidth="1.5" strokeDasharray="2"/>
      <path d="M 78 65 L 78 55" stroke="#A78BCA" strokeWidth="1.5" strokeDasharray="2"/>
    </svg>
  ),

  mirror_smile: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* Parent face left */}
      <circle cx="55" cy="65" r="28" fill="#F5C2A0"/>
      <circle cx="46" cy="60" r="4" fill="#3A2E3F"/>
      <circle cx="64" cy="60" r="4" fill="#3A2E3F"/>
      <path d="M 44 75 Q 55 85 66 75" stroke="#E88A93" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Baby face right */}
      <circle cx="145" cy="65" r="28" fill="#FFD5C2"/>
      <circle cx="136" cy="60" r="3.5" fill="#3A2E3F"/>
      <circle cx="154" cy="60" r="3.5" fill="#3A2E3F"/>
      <path d="M 134 76 Q 145 86 156 76" stroke="#E88A93" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Exchange arrows */}
      <path d="M 87 55 L 113 55" stroke="#D9C75C" strokeWidth="2" markerEnd="url(#a)"/>
      <path d="M 113 75 L 87 75" stroke="#D9C75C" strokeWidth="2" markerEnd="url(#b)"/>
      <text x="100" y="120" textAnchor="middle" fontSize="10" fill="#6B5F70" fontWeight="bold">Smile Exchange!</text>
    </svg>
  ),

  peekaboo: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F0F8F4" rx="12"/>
      {/* Parent on left with cloth */}
      <circle cx="55" cy="50" r="22" fill="#F5C2A0"/>
      {/* Cloth over face */}
      <rect x="33" y="28" width="44" height="35" rx="4" fill="#A78BCA" opacity="0.85"/>
      <image href="/images/emojis/1f440.png" x="45.2" y="33.34" width="19.599999999999998" height="19.599999999999998" />
      {/* Arms holding cloth */}
      <path d="M 44 48 L 33 42" stroke="#F5C2A0" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 66 48 L 77 42" stroke="#F5C2A0" strokeWidth="7" strokeLinecap="round"/>
      <rect x="26" y="60" width="58" height="55" rx="8" fill="#D5C8E8"/>
      {/* Baby face right - excited */}
      <circle cx="145" cy="60" r="30" fill="#FFD5C2"/>
      <circle cx="134" cy="55" r="5" fill="#3A2E3F"/>
      <circle cx="156" cy="55" r="5" fill="#3A2E3F"/>
      {/* Wide open mouth surprised */}
      <ellipse cx="145" cy="72" rx="10" ry="7" fill="#3A2E3F"/>
      <ellipse cx="145" cy="70" rx="8" ry="5" fill="#E88A93"/>
      {/* Exclamation */}
      <image href="/images/emojis/party.png" x="87.4" y="3.580000000000002" width="25.2" height="25.2" />
    </svg>
  ),

  rattle: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* Baby on back */}
      <ellipse cx="110" cy="95" rx="70" ry="22" fill="#FFD5C2"/>
      <circle cx="170" cy="80" r="20" fill="#F5C2A0"/>
      <circle cx="163" cy="77" r="3" fill="#3A2E3F"/>
      <circle cx="173" cy="77" r="3" fill="#3A2E3F"/>
      {/* Rattle (DIY container) */}
      <rect x="55" y="55" width="35" height="25" rx="8" fill="#C2DAF5"/>
      <image href="/images/emojis/1f33e.png" x="65" y="60.1" width="14" height="14" />
      {/* Hand holding rattle */}
      <ellipse cx="72" cy="90" rx="14" ry="9" fill="#F5C2A0"/>
      {/* Sound waves */}
      <path d="M 30 65 Q 25 55 30 45" stroke="#D9C75C" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M 22 68 Q 14 55 22 42" stroke="#D9C75C" strokeWidth="2" fill="none" opacity="0.6"/>
      <text x="100" y="128" textAnchor="middle" fontSize="9" fill="#6B5F70">Shake → Sound → Cause & Effect!</text>
    </svg>
  ),

  water_mat: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F0F8FF" rx="12"/>
      {/* Water mat */}
      <rect x="20" y="75" width="160" height="40" rx="8" fill="#C2DAF5" stroke="#7EB3E8" strokeWidth="2"/>
      {/* Water and items inside */}
      <ellipse cx="60" cy="95" rx="12" ry="8" fill="#7EB3E8" opacity="0.5"/>
      <ellipse cx="100" cy="90" rx="10" ry="6" fill="#7EB3E8" opacity="0.5"/>
      <image href="/images/emojis/star.png" x="133" y="88" width="16" height="16" />
      <image href="/images/emojis/1f41f.png" x="73" y="88.1" width="14" height="14" />
      {/* Baby on mat */}
      <ellipse cx="100" cy="72" rx="55" ry="18" fill="#FFD5C2"/>
      <circle cx="148" cy="62" r="15" fill="#F5C2A0"/>
      <circle cx="143" cy="60" r="3" fill="#3A2E3F"/>
      <circle cx="153" cy="60" r="3" fill="#3A2E3F"/>
      {/* Hands pressing down */}
      <ellipse cx="70" cy="76" rx="10" ry="7" fill="#F5C2A0"/>
      <ellipse cx="90" cy="76" rx="10" ry="7" fill="#F5C2A0"/>
      {/* Ripple arrows */}
      <path d="M 80 80 L 60 88 L 80 92" stroke="#7EB3E8" strokeWidth="1.5" fill="none"/>
    </svg>
  ),

  mobile: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F5F0FF" rx="12"/>
      {/* Hanging rod */}
      <rect x="40" y="15" width="120" height="6" rx="3" fill="#A78BCA"/>
      {/* Strings with shapes */}
      <line x1="60" y1="21" x2="55" y2="55" stroke="#A78BCA" strokeWidth="1.5"/>
      <line x1="90" y1="21" x2="90" y2="65" stroke="#A78BCA" strokeWidth="1.5"/>
      <line x1="120" y1="21" x2="125" y2="45" stroke="#A78BCA" strokeWidth="1.5"/>
      <line x1="148" y1="21" x2="148" y2="60" stroke="#A78BCA" strokeWidth="1.5"/>
      {/* Hanging shapes */}
      <polygon points="55,55 47,70 63,70" fill="#F5A572"/>
      <circle cx="90" cy="75" r="10" fill="#D9C75C"/>
      <rect x="116" y="45" width="18" height="18" rx="3" fill="#7BC88F" transform="rotate(15,125,54)"/>
      <image href="/images/emojis/star.png" x="141" y="62" width="22" height="22" />
      {/* Baby looking up */}
      <circle cx="100" cy="115" r="18" fill="#F5C2A0"/>
      <circle cx="93" cy="110" r="4" fill="#3A2E3F"/>
      <circle cx="107" cy="110" r="4" fill="#3A2E3F"/>
      {/* Eye gaze arrows up */}
      <path d="M 95 107 L 80 80" stroke="#A78BCA" strokeWidth="1" strokeDasharray="3" opacity="0.6"/>
      <path d="M 107 107 L 115 75" stroke="#A78BCA" strokeWidth="1" strokeDasharray="3" opacity="0.6"/>
    </svg>
  ),

  obstacle_course: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F0F8F4" rx="12"/>
      {/* Floor */}
      <rect x="10" y="105" width="180" height="8" rx="4" fill="#C8E6D0"/>
      {/* Cushion 1 */}
      <ellipse cx="45" cy="100" rx="28" ry="12" fill="#FFD5C2"/>
      <ellipse cx="45" cy="96" rx="28" ry="12" fill="#F5C2C7"/>
      {/* Cushion 2 - taller */}
      <ellipse cx="100" cy="95" rx="25" ry="10" fill="#FFD5C2"/>
      <ellipse cx="100" cy="85" rx="25" ry="10" fill="#D5C8E8"/>
      <ellipse cx="100" cy="75" rx="25" ry="10" fill="#C2DAF5"/>
      {/* Tunnel (legs) */}
      <path d="M 148 75 L 148 110 L 185 110 L 185 75" stroke="#A78BCA" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Crawling baby */}
      <circle cx="38" cy="88" r="12" fill="#F5C2A0"/>
      <ellipse cx="22" cy="92" rx="16" ry="8" fill="#FFD5C2"/>
      {/* Path arrows */}
      <path d="M 68 98 L 80 98" stroke="#7BC88F" strokeWidth="2" markerEnd="url(#a)"/>
      <path d="M 122 95 L 140 95" stroke="#7BC88F" strokeWidth="2" markerEnd="url(#a)"/>
      <text x="100" y="130" textAnchor="middle" fontSize="9" fill="#6B5F70">Over → Around → Through!</text>
    </svg>
  ),

  treasure_basket: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* Basket */}
      <path d="M 40 80 Q 40 110 100 112 Q 160 110 160 80 L 148 65 Q 100 60 52 65 Z" fill="#D9C75C" stroke="#A88A30" strokeWidth="2"/>
      {/* Basket weave lines */}
      <path d="M 55 70 L 50 100" stroke="#A88A30" strokeWidth="1" opacity="0.5"/>
      <path d="M 75 67 L 72 105" stroke="#A88A30" strokeWidth="1" opacity="0.5"/>
      <path d="M 100 66 L 100 110" stroke="#A88A30" strokeWidth="1" opacity="0.5"/>
      <path d="M 125 67 L 128 105" stroke="#A88A30" strokeWidth="1" opacity="0.5"/>
      <path d="M 145 70 L 150 100" stroke="#A88A30" strokeWidth="1" opacity="0.5"/>
      {/* Objects in basket */}
      <image href="/images/emojis/1f944.png" x="65" y="65.34" width="19.599999999999998" height="19.599999999999998" />
      <image href="/images/emojis/1faa8.png" x="85" y="70.72" width="16.799999999999997" height="16.799999999999997" />
      <image href="/images/emojis/1fab5.png" x="105" y="64.53" width="18.2" height="18.2" />
      <image href="/images/emojis/1f9f5.png" x="125" y="68.72" width="16.799999999999997" height="16.799999999999997" />
      {/* Baby seated */}
      <circle cx="100" cy="45" r="18" fill="#F5C2A0"/>
      <circle cx="94" cy="42" r="3" fill="#3A2E3F"/>
      <circle cx="106" cy="42" r="3" fill="#3A2E3F"/>
      {/* Reaching arm */}
      <path d="M 108 55 Q 118 65 115 75" stroke="#F5C2A0" strokeWidth="7" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  first_foods: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* High chair */}
      <rect x="65" y="60" width="70" height="8" rx="4" fill="#D9C75C"/>
      <rect x="78" y="68" width="44" height="55" rx="6" fill="#F5E6A3"/>
      <rect x="55" y="113" width="12" height="25" rx="4" fill="#A88A30"/>
      <rect x="133" y="113" width="12" height="25" rx="4" fill="#A88A30"/>
      {/* Tray */}
      <rect x="60" y="73" width="80" height="8" rx="4" fill="#D9C75C"/>
      {/* Food smear on tray */}
      <ellipse cx="90" cy="77" rx="14" ry="5" fill="#F5A572" opacity="0.7"/>
      <ellipse cx="115" cy="76" rx="10" ry="5" fill="#FFD5C2" opacity="0.7"/>
      {/* Baby in chair */}
      <circle cx="100" cy="55" r="18" fill="#F5C2A0"/>
      <circle cx="93" cy="52" r="3" fill="#3A2E3F"/>
      <circle cx="107" cy="52" r="3" fill="#3A2E3F"/>
      <path d="M 92 62 Q 100 67 108 62" stroke="#E88A93" strokeWidth="2" fill="none"/>
      {/* Messy hands */}
      <ellipse cx="82" cy="77" rx="10" ry="7" fill="#F5A572" opacity="0.8"/>
      <ellipse cx="115" cy="77" rx="10" ry="7" fill="#F5A572" opacity="0.8"/>
    </svg>
  ),

  reading: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F0F8F4" rx="12"/>
      {/* Adult seated */}
      <rect x="40" y="65" width="50" height="65" rx="12" fill="#A78BCA"/>
      <circle cx="65" cy="50" r="22" fill="#F5C2A0"/>
      {/* Book held open */}
      <rect x="60" y="80" width="80" height="55" rx="6" fill="white" stroke="#A78BCA" strokeWidth="2"/>
      <line x1="100" y1="80" x2="100" y2="135" stroke="#D5C8E8" strokeWidth="1.5"/>
      {/* Picture in book */}
      <circle cx="80" cy="100" r="10" fill="#FFD5C2"/>
      <image href="/images/emojis/1f436.png" x="71.6" y="89.72" width="16.799999999999997" height="16.799999999999997" />
      <text x="120" y="104" textAnchor="middle" fontSize="10">Woof!</text>
      {/* Baby on lap */}
      <circle cx="130" cy="58" r="16" fill="#FFD5C2"/>
      <circle cx="124" cy="55" r="3" fill="#3A2E3F"/>
      <circle cx="134" cy="55" r="3" fill="#3A2E3F"/>
      {/* Baby pointing at book */}
      <path d="M 128 68 Q 125 80 115 92" stroke="#FFD5C2" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <text x="100" y="128" textAnchor="middle" fontSize="9" fill="#6B5F70">Point + Name + Respond</text>
    </svg>
  ),

  dancing: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF0F5" rx="12"/>
      {/* Music notes */}
      <image href="/images/emojis/1f3b5.png" x="20" y="10.96" width="22.4" height="22.4" />
      <image href="/images/emojis/266a.png" x="160" y="10.720000000000002" width="16.799999999999997" height="16.799999999999997" />
      <image href="/images/emojis/266b.png" x="140" y="38.1" width="14" height="14" />
      {/* Parent dancing */}
      <circle cx="70" cy="45" r="20" fill="#F5C2A0"/>
      <rect x="55" y="65" width="30" height="45" rx="10" fill="#E88A93"/>
      {/* Arms up dancing */}
      <path d="M 55 75 L 30 55" stroke="#F5C2A0" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 85 75 L 110 58" stroke="#F5C2A0" strokeWidth="9" strokeLinecap="round"/>
      {/* Baby held on hip */}
      <circle cx="120" cy="70" r="16" fill="#FFD5C2"/>
      <circle cx="113" cy="66" r="3" fill="#3A2E3F"/>
      <circle cx="125" cy="66" r="3" fill="#3A2E3F"/>
      <path d="M 111 75 Q 119 80 127 75" stroke="#E88A93" strokeWidth="2" fill="none"/>
      {/* Motion lines */}
      <path d="M 60 95 Q 65 105 60 115" stroke="#F5C2C7" strokeWidth="2" fill="none" strokeDasharray="3"/>
      <path d="M 80 95 Q 85 105 80 115" stroke="#F5C2C7" strokeWidth="2" fill="none" strokeDasharray="3"/>
    </svg>
  ),

  sign_language: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F5F0FF" rx="12"/>
      {/* Three sign boxes */}
      {/* MORE sign */}
      <rect x="10" y="35" width="55" height="65" rx="8" fill="white" stroke="#A78BCA" strokeWidth="2"/>
      <text x="37" y="52" textAnchor="middle" fontSize="9" fill="#A78BCA" fontWeight="bold">MORE</text>
      <image href="/images/emojis/1f450.png" x="20.200000000000003" y="51.440000000000005" width="33.599999999999994" height="33.599999999999994" />
      <text x="37" y="95" textAnchor="middle" fontSize="8" fill="#6B5F70">Tap fingertips</text>
      {/* ALL DONE sign */}
      <rect x="73" y="35" width="55" height="65" rx="8" fill="white" stroke="#7BC88F" strokeWidth="2"/>
      <text x="100" y="52" textAnchor="middle" fontSize="9" fill="#7BC88F" fontWeight="bold">ALL DONE</text>
      <image href="/images/emojis/1f64c.png" x="83.2" y="51.440000000000005" width="33.599999999999994" height="33.599999999999994" />
      <text x="100" y="95" textAnchor="middle" fontSize="8" fill="#6B5F70">Shake hands</text>
      {/* MILK sign */}
      <rect x="136" y="35" width="55" height="65" rx="8" fill="white" stroke="#F5A572" strokeWidth="2"/>
      <text x="163" y="52" textAnchor="middle" fontSize="9" fill="#F5A572" fontWeight="bold">MILK</text>
      <image href="/images/emojis/270a.png" x="146.2" y="51.440000000000005" width="33.599999999999994" height="33.599999999999994" />
      <text x="163" y="95" textAnchor="middle" fontSize="8" fill="#6B5F70">Squeeze fist</text>
      <text x="100" y="120" textAnchor="middle" fontSize="9" fill="#6B5F70" fontWeight="bold">Start with these 3 signs!</text>
    </svg>
  ),

  nature_walk: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F0F8F4" rx="12"/>
      {/* Sky */}
      <rect x="0" y="0" width="200" height="70" rx="12" fill="#C2DAF5" opacity="0.4"/>
      {/* Ground */}
      <rect x="0" y="100" width="200" height="40" fill="#C8E6D0"/>
      {/* Tree */}
      <rect x="148" y="60" width="10" height="50" rx="3" fill="#A88A30"/>
      <circle cx="153" cy="50" r="28" fill="#7BC88F"/>
      {/* Bush */}
      <circle cx="30" cy="102" r="18" fill="#7BC88F"/>
      <circle cx="48" cy="100" r="14" fill="#C8E6D0"/>
      {/* Adult + toddler walking */}
      <circle cx="85" cy="68" r="16" fill="#F5C2A0"/>
      <rect x="72" y="84" width="26" height="36" rx="8" fill="#A78BCA"/>
      <path d="M 85 100 L 78 118 M 85 100 L 92 118" stroke="#A78BCA" strokeWidth="5" strokeLinecap="round"/>
      {/* Toddler */}
      <circle cx="110" cy="82" r="12" fill="#FFD5C2"/>
      <rect x="101" y="94" width="18" height="26" rx="6" fill="#F5C2C7"/>
      <path d="M 110 110 L 105 124 M 110 110 L 115 124" stroke="#F5C2C7" strokeWidth="4" strokeLinecap="round"/>
      {/* Holding hands */}
      <line x1="98" y1="100" x2="108" y2="100" stroke="#F5C2A0" strokeWidth="4" strokeLinecap="round"/>
      {/* Collection bag */}
      <rect x="115" y="98" width="16" height="18" rx="4" fill="#D9C75C"/>
      <image href="/images/emojis/1f342.png" x="117.4" y="100.48" width="11.2" height="11.2" />
    </svg>
  ),

  block_tower: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* Floor */}
      <rect x="20" y="115" width="160" height="8" rx="4" fill="#F5EBD9"/>
      {/* Tower of blocks */}
      <rect x="80" y="87" width="40" height="28" rx="4" fill="#F5A572"/>
      <rect x="83" y="63" width="34" height="24" rx="4" fill="#D9C75C"/>
      <rect x="87" y="43" width="26" height="20" rx="4" fill="#7BC88F"/>
      <rect x="91" y="27" width="18" height="16" rx="4" fill="#A78BCA"/>
      {/* Toddler with reaching arm */}
      <circle cx="155" cy="75" r="18" fill="#FFD5C2"/>
      <circle cx="148" cy="71" r="3" fill="#3A2E3F"/>
      <circle cx="160" cy="71" r="3" fill="#3A2E3F"/>
      {/* Pointing/reaching */}
      <path d="M 143 85 Q 130 70 110 60" stroke="#FFD5C2" strokeWidth="7" strokeLinecap="round" fill="none"/>
      {/* Second block in hand */}
      <rect x="108" y="22" width="18" height="15" rx="3" fill="#C2DAF5"/>
      {/* Arrow going on top */}
      <path d="M 108 27 L 100 27" stroke="#A78BCA" strokeWidth="1.5" markerEnd="url(#ar)"/>
    </svg>
  ),

  first_art: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#FFF8F0" rx="12"/>
      {/* Paper on table */}
      <rect x="30" y="65" width="120" height="70" rx="6" fill="white" stroke="#F5EBD9" strokeWidth="2"/>
      {/* Scribbles on paper */}
      <path d="M 45 80 Q 60 70 75 85 Q 85 95 70 100 Q 55 105 65 115" stroke="#F5A572" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 90 75 Q 110 90 95 105 Q 85 115 100 120" stroke="#A78BCA" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="120" cy="95" r="12" fill="none" stroke="#D9C75C" strokeWidth="3"/>
      {/* Crayon */}
      <rect x="35" y="55" width="10" height="30" rx="4" fill="#E88A93" transform="rotate(-20, 40, 70)"/>
      <polygon points="36,58 44,58 40,48" fill="#FFD5C2" transform="rotate(-20, 40, 70)"/>
      {/* Toddler hand */}
      <ellipse cx="95" cy="68" rx="14" ry="10" fill="#F5C2A0" transform="rotate(-15, 95, 68)"/>
      {/* Stars of pride */}
      <image href="/images/emojis/star.png" x="153" y="30" width="19" height="19" />
      <image href="/images/emojis/sparkles.png" x="165" y="48.1" width="14" height="14" />
    </svg>
  ),

  // Generic fallback
  default: (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="140" fill="#F5F0FF" rx="12"/>
      <image href="/images/emojis/target.png" x="72" y="17.4" width="56" height="56" />
      <text x="100" y="95" textAnchor="middle" fontSize="14" fill="#A78BCA" fontWeight="bold">Activity Time!</text>
      <text x="100" y="115" textAnchor="middle" fontSize="11" fill="#6B5F70">Follow the steps below</text>
    </svg>
  )
};

function ActivityIllustration({ type, className = "" }) {
  return (
    <div className={`activity-illustration ${className}`}>
      {illustrations[type] || illustrations.default}
    </div>
  );
}

export default ActivityIllustration;
