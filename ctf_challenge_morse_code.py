# CTF
import time
from picoscroll import PicoScroll, WIDTH, HEIGHT

scroll = PicoScroll()

# Morse code dictionary
morse_code = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', ' ': '/'
}

# Message to transmit
message = "DO A KICK FLIP"

# Timing constants (in seconds)
dot_duration = 0.3      # Duration of a dot
dash_duration = 0.9     # Duration of a dash (3x dot)
symbol_gap = 0.3        # Gap between dots/dashes within a letter
letter_gap = 0.9        # Gap between letters
word_gap = 2.1          # Gap between words

def light_up_display(brightness=50):
    """Light up the entire display"""
    scroll.clear()
    for y in range(HEIGHT):
        for x in range(WIDTH):
            scroll.set_pixel(x, y, brightness)
    scroll.show()

def clear_display():
    """Clear the entire display"""
    scroll.clear()
    scroll.show()

def transmit_morse_message(msg):
    """Transmit a message in morse code"""
    for char in msg.upper():
        if char in morse_code:
            morse_pattern = morse_code[char]
            
            if morse_pattern == '/':  # Space between words
                clear_display()
                time.sleep(word_gap)
            else:
                # Transmit each dot or dash
                for i, symbol in enumerate(morse_pattern):
                    if symbol == '.':
                        # Dot: short flash
                        light_up_display()
                        time.sleep(dot_duration)
                        clear_display()
                    elif symbol == '-':
                        # Dash: long flash
                        light_up_display()
                        time.sleep(dash_duration)
                        clear_display()
                    
                    # Gap between symbols within a letter
                    if i < len(morse_pattern) - 1:
                        time.sleep(symbol_gap)
                
                # Gap between letters
                time.sleep(letter_gap)

# Main loop
while True:
    transmit_morse_message(message)
    # Longer pause before repeating the message
    time.sleep(60.0)

