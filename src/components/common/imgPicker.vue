<template>
	<div class="uploadFile" v-show="uploadImg.length!=-1">
		<!-- ul、li标签用于展示从本地添加的预览图片 -->

		<div v-for="(item,index) in uploadImg" :key="index" class="addPic">
			<img :src="item">
		</div>

		<input type="file" id="file" accept="image/*" @change="getPicture($event)">
		<button @click="callFile" v-show="showInputImg">+</button>
	</div>
</template>
<script>
	export default {
		name: "imgPicker",
		data() {
			return {
				uploadImg: [],
				imgList: [],
			}
		},
		computed: {
			showInputImg() {
				return this.uploadImg.length < 9;
			}
		},
		methods: {
			getPicture(e) {
				//预览图片
				let src = window.URL.createObjectURL(e.target.files[0]);
				this.uploadImg.push(src);
				console.log(e.target.files)
				console.log(src)
				//将图片文件转化成base64格式图片
				var reader = new FileReader();

				reader.onload = (e) => {
					//e.target.result  就是从本地读取的图片的base64格式,将它上传给服务器即可
					//使用axios的post方法上传即可
					var imginfo = {
						imgid: null,
						imgsrc: null
					}
					imginfo.imgid = this.uploadImg[this.uploadImg.length - 1].split("8080/")[1]
					imginfo.imgsrc = reader.result.split("base64,")[1]
					this.imgList.push(imginfo)
					this.$emit('imglist', this.imgList)
				}
				reader.readAsDataURL(e.target.files[0])
			},
			callFile() {
				//点击添加图片按钮，触发type:"file"的input标签
				let fileDom = document.querySelector("#file")
				fileDom.click()
			}
		}
	}
</script>
<style scoped>
	input {
		/* 隐藏默认的"打开文件"样式 */
		display: none;
	}

	.uploadFile {
		display: flex;
		flex-wrap: wrap;
		height: auto;
		padding: 10px 0;
		border-bottom: 1px solid rgb(235, 235, 235);
		overflow: hidden;
	}

	.uploadFile ul {
		display: flex;
	}

	.uploadFile ul li {
		margin-right: 10px;
	}

	.uploadFile .addPic img {
		height: 100px;
		width: 100px;
		margin: 10px;
	}

	.uploadFile button {
		height: 100px;
		width: 100px;
		margin: 10px;
		font-size: 50px;
		border: 1px dashed rgb(182, 182, 182);
		color: rgb(182, 182, 182);
		background-color: rgb(243, 243, 243);
	}
</style>
