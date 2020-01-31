<template>
	<form class="new-player-form md-layout md-gutter" @submit.prevent="addNewPlayer()">
		<div class="md-layout-item md-size-25">
			<img src="../assets/img/avatar.jpg" class="new-player-form__img" alt="" />
		</div>
		<div class="md-layout-item">
			<!-- если проверка прошла - функция валидации возвращает true, а error показывается в случае непрохождения проверки
                по этому и ставим оператор отрицания ! -->
			<md-field :class="{ 'md-invalid': errors.name }">
				<label>Name</label>
				<md-input v-model.lazy="newPlayer.name" @blur="validateNameField"></md-input>
				<span class="md-error">{{ errors.name }}</span>
			</md-field>

			<md-field :class="{ 'md-invalid': errors.age }">
				<label>Age</label>
				<md-input v-model.lazy="newPlayer.age" type="number" max="50" @blur="validateAgeField()"></md-input>
				<span class="md-error">{{ errors.age }}</span>
			</md-field>
			<md-field :class="{ 'md-invalid': errors.rating }">
				<label>Rating</label>
				<md-input v-model.lazy="newPlayer.rating" type="number" max="10" @blur="validateRatingField()"></md-input>
				<span class="md-error">{{ errors.rating }}</span>
			</md-field>

			<md-field :class="{ 'md-invalid': errors.url }">
				<label>URL</label>
				<md-input v-model.lazy="newPlayer.url" type="text" @blur="validateUrlField()"></md-input>
				<span class="md-error">{{ errors.url }}</span>
			</md-field>


			<md-field :class="{ 'md-invalid': errors.aboutInfo }">
				<label>About info</label>
				<md-textarea md-autogrow v-model="newPlayer.aboutInfo" @blur="validateAboutInfoField()"></md-textarea>
				<span class="md-error">{{ errors.aboutInfo }}</span>
			</md-field>
			<md-button type="submit" class="md-raised md-accent new-player-form__btn">Add new player to database</md-button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			newPlayer: {
				name: "",
				age: "",
				phoneNumber: "",
				rating: "",
				aboutInfo: "",
				img: "default",
				url: ""
			},
			errors: {
				name: "",
				age: "",
				aboutInfo: "",
				rating: "",
				url: ""
			}
		};
	},
	methods: {
		addNewPlayer() {
			if (this.validateNameField() && this.validateAgeField() && this.validateRatingField() && this.validateAboutInfoField()) {
				this.$store.dispatch("addNewPlayer", this.newPlayer);
				// this.newPlayer.name = this.newPlayer.age = this.newPlayer.rating = this.newPlayer.aboutInfo = ''
			}
		},
		validateNameField() {
			if (this.newPlayer.name.length <= 4) {
				this.errors.name = "Name should contain 4 and more symbols";
				return false;
			} else if (/^[A-Za-z]+([\ A-Za-z]+)*/.test(this.newPlayer.name) !== true) {
				this.errors.name = "Name should contain only latin letters";
				return false;
			} else {
				this.errors.name = "";
				return true;
			}
		},
		validateUrlField() {
			if (this.newPlayer.url.length <= 4) {
				this.errors.url = "Url should contain 4 and more symbols";
				return false;
			} else if (/^[A-Za-z]+([\ A-Za-z]+)*/.test(this.newPlayer.url) !== true) {
				this.errors.url = "Name should contain only latin letters";
				return false;
			} else {
				this.errors.url = "";
				return true;
			}
		},

		validateAgeField() {
			//получаем данные с инпута в строковом формате, смотрим какая длинна
			// если не 2 цифры, то тригерим еррор
			if (this.newPlayer.age.length != 2) {
				this.errors.age = "Age field should contain only 2 digits";
				return false;
			} else if (this.newPlayer.age > 50 || this.newPlayer.age < 15) {
				this.errors.age = "Age should be higher than 15 and less than 50";
				return false;
			} else {
				this.errors.age = "";
				return true;
			}
		},
		validateRatingField() {
			if (this.newPlayer.rating.length > 2 || this.newPlayer.rating.length === 0) {
				this.errors.rating = "Rating field should contain 1 or 2 digits";
				return false;
			} else if (this.newPlayer.rating <= 1 || this.newPlayer.rating > 10) {
				this.errors.rating = "Rating should be higher than 1 and less than 10";
				return false;
			} else {
				this.errors.rating = "";
				return true;
			}
		},
		validateAboutInfoField() {
			if (this.newPlayer.aboutInfo.length <= 0) {
				this.errors.aboutInfo = "About field is mandatory";
				return false;
			} else {
				this.errors.aboutInfo = "";
				return true;
			}
		}
	},
	//смотрим на заполнение формы и передаем значения в родительский
	// компонент для показа warning popup
	watch: {
		newPlayer: {
			handler: function() {
				if (this.newPlayer.name || this.newPlayer.age || this.newPlayer.phoneNumber || this.newPlayer.rating || this.newPlayer.aboutInfo) {
					this.$emit("hasFilledFields");
				} else {
					this.$emit("hasNoFilledFields");
				}
			},
			deep: true
		}
	}
};
</script>

<style lang="scss">
.new-player-form {
	&__btn {
		margin: 20px 0 0 0 !important;
	}

	&__img {
		display: block;
		border-radius: 50%;
		margin: 0 auto 15px auto;
	}
}
</style>
