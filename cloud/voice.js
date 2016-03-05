/**
 * Created by Andy on 3/5/2016.
 */
Parse.Cloud.define("voice", function (request, response) {
    var voiceFile = request.params.voice;

    var Voice = Parse.Object.extend("Voice");
    var voice = new Voice();
    voice.set("VoiceFile", voiceFile);
    voice.save(null, {
        success: function (voice) {
            response.success("Success" + voice.id);
            alert('New voice created: ' + voice.id);
        },
        error: function (voice, error) {
            response.error(error);
            alert('Voice creation error: ' + error.message);
        }
    })
});