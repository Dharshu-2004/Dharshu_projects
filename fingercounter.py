import cv2
import mediapipe as mp
import numpy as np

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.75)
mp_drawing = mp.solutions.drawing_utils

# Start video capture
cap = cv2.VideoCapture(0)

# Define finger tip landmarks based on MediaPipe's model
finger_tips = [8, 12, 16, 20]
thumb_tip = 4

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Flip the frame for a mirror effect
    frame = cv2.flip(frame, 1)
    h, w, _ = frame.shape
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process the frame and find hands
    result = hands.process(rgb_frame)

    if result.multi_hand_landmarks:
        for hand_landmarks in result.multi_hand_landmarks:
            # Draw hand landmarks
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

            # Initialize finger count
            fingers_up = []

            # Check Thumb
            if hand_landmarks.landmark[thumb_tip].x < hand_landmarks.landmark[thumb_tip - 1].x:
                fingers_up.append(1)  # Thumb is up
            else:
                fingers_up.append(0)  # Thumb is down

            # Check other fingers
            for tip in finger_tips:
                if hand_landmarks.landmark[tip].y < hand_landmarks.landmark[tip - 2].y:
                    fingers_up.append(1)  # Finger is up
                else:
                    fingers_up.append(0)  # Finger is down

            # Count fingers up
            fingers_count = fingers_up.count(1)
            bright_green = (0, 255, 0)
            # Overlay for finger count display
            overlay = np.zeros_like(frame, dtype=np.uint8)
            # Draw border
            cv2.rectangle(overlay, (10, 10), (w - 10, h - 10), bright_green, 20)  # Border
            cv2.putText(overlay, 'FINGER COUNT', (20, 80), cv2.FONT_HERSHEY_SIMPLEX, 2, bright_green, 5)

# Draw the finger count box with a brighter shade of green
            cv2.rectangle(overlay, (w - 150, h - 150), (w - 10, h - 10), bright_green, -1)
            cv2.putText(overlay, str(fingers_count), (w - 140, h - 30), cv2.FONT_HERSHEY_SIMPLEX, 4, (255, 255, 255), 6)

# Blend with a higher weight on the overlay to make colors appear more vivid
            frame = cv2.addWeighted(frame, 0.6, overlay, 0.4, 0)
           

    # Display the frame
    cv2.imshow("Finger Counter", frame)

    # Break loop on 'q' key press
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release resources
cap.release()
cv2.destroyAllWindows()
