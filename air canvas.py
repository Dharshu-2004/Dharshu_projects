import cv2
import numpy as np
import mediapipe as mp

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
hands = mp_hands.Hands(min_detection_confidence=0.8, min_tracking_confidence=0.8)

# Initialize OpenCV
cap = cv2.VideoCapture(0)
canvas = None
secondary_canvas = None
color = (255, 0, 0)
thickness = 5
color_ranges = {
    'blue': ((255, 0, 0), (50, 50)),
    'red': ((0, 0, 255), (100, 50)),
    'green': ((0, 255, 0), (150, 50)),
    'yellow': ((0, 255, 255), (200, 50)),
}
clear_area = (250, 50, 50, 50)
prev_x, prev_y = None, None

def get_color(x, y):
    for color_name, ((b, g, r), (cx, cy)) in color_ranges.items():
        if (cx - 20 <= x <= cx + 20) and (cy - 20 <= y <= cy + 20):
            return (b, g, r)
    if (clear_area[0] <= x <= clear_area[0] + clear_area[2]) and (clear_area[1] <= y <= clear_area[1] + clear_area[3]):
        return 'clear'
    return None

while True:
    ret, frame = cap.read()
    if not ret:
        break
    frame = cv2.flip(frame, 1)
    if canvas is None:
        canvas = np.zeros_like(frame)
    if secondary_canvas is None:
        secondary_canvas = np.ones_like(frame) * 255  # White background

    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb_frame)

    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            x = int(hand_landmarks.landmark[8].x * frame.shape[1])
            y = int(hand_landmarks.landmark[8].y * frame.shape[0])

            selected_color = get_color(x, y)
            if selected_color:
                if selected_color == 'clear':
                    canvas = np.zeros_like(frame)
                    secondary_canvas = np.ones_like(frame) * 255  # Reset to white background
                else:
                    color = selected_color
                prev_x, prev_y = None, None
            else:
                if prev_x is not None and prev_y is not None:
                    cv2.line(canvas, (prev_x, prev_y), (x, y), color, thickness)
                    cv2.line(secondary_canvas, (prev_x, prev_y), (x, y), color, thickness)
                prev_x, prev_y = x, y
    else:
        prev_x, prev_y = None, None
    
    frame = cv2.add(frame, canvas)
    for color_name, ((b, g, r), (cx, cy)) in color_ranges.items():
        cv2.circle(frame, (cx, cy), 20, (b, g, r), -1)
    cv2.rectangle(frame, clear_area, (255, 255, 255), -1)
    cv2.putText(frame, 'Clear', (clear_area[0] + 5, clear_area[1] + 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2)
    
    cv2.imshow('Air Canvas', frame)
    cv2.imshow('Secondary Window', secondary_canvas)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
