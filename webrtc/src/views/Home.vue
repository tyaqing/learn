<template>
  <div class="home">
    <label for="">声音输入:</label>
    <select>
      <option v-for="item in audioinput" :key="item.deviceId" value="item">{{
        item.label
      }}</option>
    </select>
    <br />
    <label for="">声音输出:</label>
    <select>
      <option v-for="item in audiooutput" :key="item.deviceId" value="item">{{
        item.label
      }}</option>
    </select>
    <br />
    <label for="">声音输出:</label>
    <select>
      <option v-for="item in videoinput" :key="item.deviceId" value="item">{{
        item.label
      }}</option>
    </select>
    <!-- <audio controls></audio> -->
    <button @click="shootcut">shootcut</button>
    <video class="video" ref="video" autoplay playsinline></video>
    <canvas class="canvas" width="640" height="480" ref="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  audioinput: MediaDeviceInfo[] = [];
  audiooutput: MediaDeviceInfo[] = [];
  videoinput: MediaDeviceInfo[] = [];

  mounted() {
    navigator.mediaDevices
      .enumerateDevices()
      .then(this.getDevices)
      .catch(this.handleError);

    navigator.mediaDevices
      .getUserMedia({
        video: {
          frameRate: {
            max: 30,
            min: 15
          }
        },
        audio: false
        // audio: {
        //   echoCancellation:true,
        //   channelCount:1,

        // }
      })
      .then(this.gotMediaStream);
  }
  gotMediaStream(stream: MediaStream) {
    (this.$refs.video as HTMLVideoElement).srcObject = stream;
    const videoTrack: MediaStreamTrack = stream.getVideoTracks()[0];
    const videoConstraints: MediaTrackSettings = videoTrack.getSettings();
    console.log(videoConstraints);
  }
  getDevices(devicesInfo: MediaDeviceInfo[] | null) {
    devicesInfo &&
      devicesInfo.map(item => {
        item.kind === "audioinput" && this.audioinput.push(item);
        item.kind === "audiooutput" && this.audiooutput.push(item);
        item.kind === "videoinput" && this.videoinput.push(item);
      });
  }
  handleError(err: Error) {
    console.log(err);
  }
  shootcut() {
    (this.$refs.canvas as HTMLCanvasElement)
      .getContext("2d")
      ?.drawImage((this.$refs.video) as HTMLVideoElement, 0, 0, 640, 480);
  }
}
</script>
<style lang="css">
.video {
  filter: grayscale(1);
  filter: invert(1);
  /* filter: ; */
  /* -webkit-filter: gr(3px); */
}
</style>
