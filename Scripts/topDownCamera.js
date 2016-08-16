﻿#pragma strict

public var mouseSensitivity : float = 1.0;
private var lastPosition : Vector3;

function Update() {
	var delta : Vector3 = Input.mousePosition - lastPosition;
	transform.Translate(delta.x * mouseSensitivity, delta.y * mouseSensitivity, 0);
	lastPosition = Input.mousePosition;
}