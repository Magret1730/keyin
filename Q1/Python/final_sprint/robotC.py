def start():
    # === Initialization ===
    robot_ctrl.set_mode(rm_define.robot_mode_free)
    gimbal_ctrl.set_rotate_speed(60)
    chassis_ctrl.set_rotate_speed(30)
    chassis_ctrl.set_trans_speed(0.5)

    # === Move to Position B ===
    chassis_ctrl.move_with_distance(0, 0.3)  # A to B
    time.sleep(5)  # Reset point at B

    # === Move to Position C ===
    chassis_ctrl.move_with_distance(0, 1.0)
    marker = detect_marker()
    handle_marker(marker, "C")

    # === Bypass Position D (but Reset) ===
    chassis_ctrl.move_with_distance(0, 1.0)
    time.sleep(5)  # Reset at D

    # === Move to Position E ===
    chassis_ctrl.move_with_distance(0, 1.0)
    marker = detect_marker()
    handle_marker(marker, "E")

    # === Move to Position F ===
    chassis_ctrl.move_with_distance(0, 1.0)
    number = detect_number_marker()
    handle_f_marker(number)
    time.sleep(5)  # Reset at F

    # === Move to Position G ===
    chassis_ctrl.move_with_distance(0, 1.0)
    marker = detect_marker()
    handle_marker(marker, "G")

    # === Move to Position H ===
    chassis_ctrl.move_with_distance(0, 1.0)
    time.sleep(5)  # Reset at H

    # === Return to Position D ===
    chassis_ctrl.move_with_distance(180, 1.0)
    research_feature()  # Custom action
    time.sleep(5)  # Reset at D

    # === Final Return to A (straight line) ===
    chassis_ctrl.move_with_distance(180, 5.0)

    # === End ===
    gimbal_ctrl.recenter()


# === Marker Detection Logic (Simplified Placeholder) ===
def detect_marker():
    # In real use, use vision_ctrl.get_marker_detection_info()
    marker_id = vision_ctrl.get_marker_detection_info()
    if marker_id == 1:
        return "F"
    elif marker_id == 2:
        return "D"
    elif marker_id == 3:
        return "P"
    return "Unknown"

def detect_number_marker():
    # Detect number marker at Position F
    marker_id = vision_ctrl.get_marker_detection_info()
    if marker_id == 11:
        return 1
    elif marker_id == 12:
        return 2
    elif marker_id == 13:
        return 3
    return 0

# === Handling Markers (F, D, P) ===
def handle_marker(marker, position):
    if marker == "F":
        gimbal_ctrl.recenter()
        time.sleep(1)
        gimbal_ctrl.pitch_ctrl(10)
        time.sleep(1)
        blaster_ctrl.fire()
    elif marker == "P":
        print("Person detected at", position)
        go_back_to_A()
        return_to_position(position)
    elif marker == "D":
        print("Dangerous zone at", position + " - Skipping")
    else:
        print("No valid marker at", position)

def go_back_to_A():
    chassis_ctrl.move_with_distance(180, 5.0)  # Back to A
    time.sleep(1)

def return_to_position(position):
    if position == "C":
        chassis_ctrl.move_with_distance(0, 1.0)
    elif position == "E":
        chassis_ctrl.move_with_distance(0, 3.0)
    elif position == "G":
        chassis_ctrl.move_with_distance(0, 5.0)

# === Handle Marker at Position F ===
def handle_f_marker(marker):
    if marker == 1:
        # Chassis and Gimbal action
        chassis_ctrl.rotate_with_degree(rm_define.clockwise, 90)
        gimbal_ctrl.pitch_ctrl(20)
    elif marker == 2:
        # LED Light action
        led_ctrl.set_top_led(r=255, g=0, b=0, effect=rm_define.led_effect_breath)
    elif marker == 3:
        # Do both
        handle_f_marker(1)
        handle_f_marker(2)

# === Research Feature at D on return ===
def research_feature():
    # Example: Gimbal scanning with flashing light
    led_ctrl.set_flash(r=0, g=0, b=255)
    gimbal_ctrl.rotate_with_degree(rm_define.clockwise, 90)
    gimbal_ctrl.rotate_with_degree(rm_define.anticlockwise, 180)
