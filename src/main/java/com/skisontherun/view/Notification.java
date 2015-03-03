package com.skisontherun.view;

import java.util.ArrayList;
import java.util.List;

public class Notification {

	private String title;
	private String text;
	private List<String> lines = new ArrayList<String>();
	private NotificationType type;
	private int displaySeconds = 5;
	private boolean isPinned;
	
	public Notification() {

	}
	
	public Notification(String title, String text, NotificationType type) {
		this.title = title;
		this.text = text;
		this.type = type;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<String> getLines() {
		return lines;
	}

	public void setLines(List<String> lines) {
		this.lines = lines;
	}
	
	public NotificationType getType() {
		return type;
	}

	public void setType(NotificationType type) {
		this.type = type;
	}

	public void addLine(String line) {
		lines.add(line);
	}

	public int getDisplaySeconds() {
		return displaySeconds;
	}

	public void setDisplaySeconds(int displaySeconds) {
		this.displaySeconds = displaySeconds;
	}

	public boolean isPinned() {
		return isPinned;
	}

	public void setPinned(boolean pinned) {
		this.isPinned = pinned;
	}
	
}
