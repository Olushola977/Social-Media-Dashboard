
	function switchmode() {
		const checkBox = document.getElementById('checkbox');
		const element = document.body;
		const text = document.getElementById('mode');

		//default
			element.classList.remove('darkMode');
			element.classList.add('lightMode');
			text.innerHTML = "Light Mode"

			if (checkbox.checked == true) {
				element.classList.remove('lightMode');
				element.classList.add('darkMode');
				text.innerHTML = "Dark Mode";
			
			}

	}